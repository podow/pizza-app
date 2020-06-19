import React from 'react';
import { createFilter, components } from 'react-select';
import { Config } from 'react-select/src/filters';

import StyledSelect from './style';

import { IFormSelectProps } from 'interfaces/components/form';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/static/images/icons/filter-dropdown.svg" alt="dropdown" />
    </components.DropdownIndicator>
  );
};

const FormSelect: React.FC<IFormSelectProps> = ({ ...props }) => {
  const {
    field,
    placeholder,
    isSearchable,
    isDisabled,
    isFullWidth,
    isFullHeight,
    isClearable,
    options,
    onChange,
    adapter,
    value,
    isNotRounded,
    extraPadding,
    extraPaddingUnique
  } = props;

  const filterConfig: Config = {
    ignoreCase: true,
    ignoreAccents: false,
    trim: false,
    matchFrom: 'any'
  };

  function handleChange(selectedOption) {
    props.form && props.form.setFieldValue(field && field.name, selectedOption);
  }

  const adaptedOptions = adapter(options || []);

  return (
    <StyledSelect
      backspaceRemovesValue
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      components={{ DropdownIndicator }}
      filterOption={createFilter(filterConfig)}
      name={field && field.name}
      instanceId={field && field.name}
      placeholder={placeholder || 'Выберите...'}
      options={adaptedOptions}
      isFullWidth={isFullWidth}
      isFullHeight={isFullHeight}
      onChange={onChange ? onChange : handleChange}
      value={value}
      isNotRounded={isNotRounded}
      extraPadding={extraPadding}
      extraPaddingUnique={extraPaddingUnique}
      {...props}
    />
  );
};

export default FormSelect;
