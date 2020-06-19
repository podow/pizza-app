import React from 'react';
import { InputField } from './style';
import { IFormFieldProps } from 'interfaces/components/form';

const FormField: React.FC<IFormFieldProps> = ({ field, ...props }) => {
  const { isNotRounded, filterProp, isFullHeight, extraPaddingUnique } = props;

  return (
    <InputField
      isFullHeight={isFullHeight}
      filterProp={filterProp}
      isNotRounded={isNotRounded}
      extraPaddingUnique={extraPaddingUnique}
      {...field}
      {...props}
    />
  );
};

export default FormField;
