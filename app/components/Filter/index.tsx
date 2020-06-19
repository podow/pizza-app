import React, { Fragment, useEffect } from 'react';
import { Field, Formik } from 'formik';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import FormSelect from 'app/components/Form/SelectField';
import Checkbox from 'app/components/Checkbox';
import {
  PriceFromFieldBlock,
  PriceToFieldBlock
} from 'app/components/Form/style';
import FormField from 'app/components/Form/Field';
import { Button } from 'app/components/Buttons/Button';

import { FlexBlock, LinkTag } from 'app/globalStyle';

import {
  FilterWrapper,
  FilterBody,
  FilterTypes,
  FilterType,
  FilterClasses,
  FormWrapper
} from './style';

import { IAdapterProps } from 'interfaces/filter';

import { filterObject, objectToGetParams } from 'helpers';

type ArrayOfObject = {
  [key: string]: number | string;
};

const FilterTypesBlock: React.FC<{ filterTypes: ArrayOfObject[] }> = props => {
  const router = useRouter();
  const { filterTypes } = props;

  useEffect(() => {
    if (!router.query.room_type) {
      Router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          room_type: 1
        }
      });
    }
  }, []);

  const handleTypeChange = type => {
    const newValues = filterObject({ room_type: type });

    const pathnameDict = {
      pathname: '/filter',
      query: { ...newValues }
    };

    const as = `/filter${objectToGetParams({ ...newValues })}`;

    Router.replace(pathnameDict, as);
  };

  return (
    <FilterTypes>
      {filterTypes.map(el => (
        <Fragment key={el.value}>
          <FilterType>
            <LinkTag
              active={el.value === +router.query.room_type}
              onClick={() => handleTypeChange(el.value)}
            >
              {el.label}
            </LinkTag>
          </FilterType>
        </Fragment>
      ))}
    </FilterTypes>
  );
};

const Filter: React.FC<{ isFlat: boolean }> = ({ isFlat }) => {
  const { filterData, filterMeta, citiesData } = useSelector(state => ({
    filterData: state.projectList.filter_data,
    filterMeta: state.projectList.meta.data,
    citiesData: state.common.cities.data
  }));

  const cities = citiesData.map(item => ({
    value: item.item_id,
    label: item.title
  }));

  const filterTypes: ArrayOfObject[] = [
    { value: 1, label: 'Жилые' },
    { value: 2, label: 'Коммерческие' },
    { value: 3, label: 'Иные' }
  ];

  const initialValues = {
    city_id: 'all',
    real_estate_id: 'all',
    one_room: false,
    two_room: false,
    three_room: false,
    more_room: false,
    price_from: null,
    price_to: null,
    floor_from: null,
    floor_to: null,
    not_first_floor: false,
    not_last_floor: false,
    square_from: null,
    square_to: null,
    repair_finished: false,
    repair_not_finished: false,
    '1_2020': false,
    '1_2021': false,
    '2022': false,
    district_id: 'all',
    class_business: false,
    class_premium: false,
    class_comfort: false,
    construction_stage: 'all',
    address: 'all',
    room_type: '1',
    credit: false,
    discount: false
  };

  const filterValues = {
    ...initialValues,
    ...filterData,
    city_id: filterData && filterData.city_id ? filterData.city_id : 'all'
  };

  const handleSubmit = values => {
    const newValues = filterObject({
      ...values
    });

    const pathnameDict = {
      pathname: '/filter',
      query: { ...newValues }
    };

    const pathnameFlatslist = {
      pathname: '/flatslist',
      query: { ...newValues }
    };

    const as = `/filter${objectToGetParams({ ...newValues })}`;
    const flatsAs = `/flatslist${objectToGetParams({ ...newValues })}`;

    const isFlatFilter = isFlat ? pathnameFlatslist : pathnameDict;
    const isFlatFilterAs = isFlat ? flatsAs : as;

    Router.replace(isFlatFilter, isFlatFilterAs);
  };

  const handleResetFilter = () => {
    const pathnameDict = {
      pathname: '/filter',
      query: { room_type: 1 }
    };

    const as = `/filter`;
    Router.replace(pathnameDict, as);
  };

  return (
    <FilterWrapper>
      <FilterBody>
        <FilterTypesBlock filterTypes={filterTypes} />
        <FilterClasses>
          <Formik
            onSubmit={values => handleSubmit(values)}
            initialValues={filterValues}
            render={props => (
              <form onSubmit={props.handleSubmit}>
                <FormWrapper>
                  <Field
                    component={FormSelect}
                    placeholder="Все города"
                    name="city_id"
                    defaultValue={
                      cities.filter(i => i.value === +props.values.city_id) ||
                      'all'
                    }
                    options={cities}
                    isFullWidth={true}
                    adapter={(city: IAdapterProps<number, string>[]) =>
                      city.map(item => ({
                        value: item.value,
                        label: item.label
                      }))
                    }
                  />

                  <Field
                    component={FormSelect}
                    placeholder="Все объекты"
                    name="real_estate_id"
                    defaultValue={
                      filterMeta.estates.filter(
                        i => i.value === Router.router?.query.real_estate_id
                      ) || 'all'
                    }
                    options={filterMeta.estates || []}
                    isFullWidth={true}
                    adapter={(objects: IAdapterProps<number, string>[]) =>
                      objects.map(item => ({
                        value: item.value,
                        label: item.label
                      }))
                    }
                  />

                  <FlexBlock justify="space-between">
                    <Field
                      component={Checkbox}
                      name="one_room"
                      id="one_room"
                      labelValue="1"
                      isSquare={true}
                      checked={props.values.one_room || false}
                    />

                    <Field
                      component={Checkbox}
                      name="two_room"
                      id="two_room"
                      labelValue="2"
                      isSquare={true}
                      checked={props.values.two_room || false}
                    />

                    <Field
                      component={Checkbox}
                      name="three_room"
                      id="three_room"
                      labelValue="3"
                      isSquare={true}
                      checked={props.values.three_room || false}
                    />

                    <Field
                      component={Checkbox}
                      name="more_room"
                      id="more_room"
                      labelValue="4+"
                      isSquare={true}
                      checked={props.values.more_room || false}
                    />
                  </FlexBlock>

                  <FlexBlock>
                    <PriceFromFieldBlock beforeText="От" afterText="млн.">
                      <Field
                        filterProp
                        component={FormField}
                        name="price_from"
                        value={props.values.price_from}
                      />
                    </PriceFromFieldBlock>
                    <PriceToFieldBlock beforeText="До" afterText="млн.">
                      <Field
                        filterProp
                        component={FormField}
                        name="price_to"
                        value={props.values.price_to}
                      />
                    </PriceToFieldBlock>
                  </FlexBlock>

                  <FlexBlock>
                    <PriceFromFieldBlock beforeText="От">
                      <Field
                        filterProp
                        component={FormField}
                        name="floor_from"
                        values={props.values.floor_from}
                      />
                    </PriceFromFieldBlock>
                    <PriceToFieldBlock beforeText="До" afterText="Этажей">
                      <Field
                        filterProp
                        component={FormField}
                        name="floor_to"
                        values={props.values.floor_from}
                      />
                    </PriceToFieldBlock>
                  </FlexBlock>

                  <FlexBlock>
                    {/* <Field
                      component={Checkbox}
                      name="not_first_floor"
                      id="not_first_floor"
                      labelValue="Не первый"
                      checked={props.values.not_first_floor || false}
                    /> */}
                    <Field
                      component={Checkbox}
                      name="not_last_floor"
                      id="not_last_floor"
                      labelValue="Не последний этаж"
                      checked={props.values.not_last_floor || false}
                    />
                  </FlexBlock>

                  <FlexBlock>
                    <PriceFromFieldBlock beforeText="От" afterText="м2">
                      <Field filter component={FormField} name="square_from" />
                    </PriceFromFieldBlock>
                    <PriceToFieldBlock beforeText="До" afterText="м2">
                      <Field filter component={FormField} name="square_to" />
                    </PriceToFieldBlock>
                  </FlexBlock>

                  {/* <FlexBlock>
                    <Field
                      component={Checkbox}
                      name="repair_finished"
                      id="repair_finished"
                      labelValue="С отделкой"
                      checked={props.values.repair_finished || false}
                    />
                    <Field
                      component={Checkbox}
                      name="repair_not_finished"
                      id="repair_not_finished"
                      labelValue="Без отделки"
                      checked={props.values.repair_not_finished || false}
                    />
                  </FlexBlock> */}

                  <FlexBlock>
                    <Field
                      component={Checkbox}
                      name="1_2020"
                      id="1_2020"
                      labelValue="2020"
                      isSquare
                      checked={props.values['1_2020'] || false}
                    />
                    <Field
                      component={Checkbox}
                      name="1_2021"
                      id="1_2021"
                      labelValue="2021"
                      isSquare
                      checked={props.values['1_2021'] || false}
                    />
                    <Field
                      component={Checkbox}
                      name="2022"
                      id="2022"
                      labelValue="2022+"
                      isSquare
                      checked={props.values['2022'] || false}
                    />
                  </FlexBlock>

                  {/* <Field
                    component={FormSelect}
                    placeholder="Все стадии"
                    name="construction_stage"
                    defaultValue="all"
                    options={[
                      {
                        value: 'all',
                        label: 'Все стадии'
                      },
                      {
                        value: '1',
                        label: 'На этапе строительства'
                      },
                      {
                        value: '2',
                        label: 'Готов'
                      }
                    ]}
                    adapter={list =>
                      list.map(item => ({
                        value: item.value,
                        label: item.label
                      }))
                    }
                    isFullWidth={true}
                  /> */}

                  <Field
                    component={FormSelect}
                    placeholder="Все районы"
                    name="district_id"
                    options={filterMeta.districts || []}
                    isFullWidth={true}
                    adapter={(all_districts: IAdapterProps<number, string>[]) =>
                      all_districts.map(item => ({
                        value: item.value,
                        label: item.label
                      }))
                    }
                  />

                  {/* <FlexBlock>
                    <Field
                      component={Checkbox}
                      name="credit"
                      id="credit"
                      labelValue="Ипотека"
                      checked={props.values.credit || false}
                    />
                    <Field
                      component={Checkbox}
                      name="discount"
                      id="discount"
                      labelValue="Акции и скидки"
                      checked={props.values.discount || false}
                    />
                  </FlexBlock> */}

                  <Button type="submit" isFullWidth={true}>
                    Показать варианты
                  </Button>

                  <FlexBlock justify="center">
                    <LinkTag onClick={() => handleResetFilter()}>
                      Сбросить фильтр
                    </LinkTag>
                  </FlexBlock>
                </FormWrapper>
              </form>
            )}
          />
        </FilterClasses>
      </FilterBody>
    </FilterWrapper>
  );
};

export default Filter;
