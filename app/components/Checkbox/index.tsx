import React from 'react';
import { CheckboxWrapper, MainWrapper } from './style';

import { ICheckboxProps } from 'interfaces/components/checkbox';

const Checkbox: React.FC<ICheckboxProps> = props => {
  const { id, name, labelValue, field, isSquare } = props;
  return (
    <MainWrapper isSquare={isSquare}>
      <CheckboxWrapper
        isSquare={isSquare}
        type="checkbox"
        id={id}
        name={name}
        {...field}
        {...props}
      />
      <label htmlFor={id}>{labelValue}</label>
    </MainWrapper>
  );
};

export default Checkbox;
