import React from 'react';
import { ErrorMessage } from 'formik';

import { ErrorBlock, InputField } from './style';

import { IFormFieldProps } from 'interfaces/components/form';

const FormField: React.FC<IFormFieldProps> = ({ field, ...props }) => {
  const { isNotRounded, filterProp, isFullHeight, extraPaddingUnique } = props;

  return (
    <div>
      <InputField
        isFullHeight={isFullHeight}
        filterProp={filterProp}
        isNotRounded={isNotRounded}
        extraPaddingUnique={extraPaddingUnique}
        {...field}
        {...props}
      />
      <ErrorMessage component={ErrorBlock} name={field.name} />
    </div>
  );
};

export default FormField;
