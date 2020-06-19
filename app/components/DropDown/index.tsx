import React, { Fragment } from 'react';
import { DropDownMenu, DropDownMenuList, DropDownMenuValue } from './style';
import { IDropDownProps } from 'interfaces/components/dropdown';

const DropDown: React.FC<IDropDownProps> = props => {
  const {
    options,
    currentValue,
    isOpened,
    toggleCities,
    toLeft,
    selectCity
  } = props;

  return (
    <Fragment>
      <DropDownMenu onClick={toggleCities} ml={toLeft}>
        <DropDownMenuValue>
          {currentValue === '' ? 'Другой город' : currentValue}
        </DropDownMenuValue>
        <DropDownMenuList opened={isOpened}>
          {options &&
            Array.isArray(options) &&
            options.length &&
            options.map(el => (
              <div onClick={() => selectCity(el.name)} key={el.id}>
                {el.name}
              </div>
            ))}
        </DropDownMenuList>
      </DropDownMenu>
    </Fragment>
  );
};

export default DropDown;
