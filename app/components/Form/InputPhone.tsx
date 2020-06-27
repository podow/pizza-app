import React from 'react';
import { Field, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';

import { InputPhoneWrapper, ErrorBlock } from './style';

import { IInputPhoneProps } from 'interfaces/components/form';

const InputPhone: React.FC<IInputPhoneProps> = ({ validate, isFullWidth }) => {
  return (
    <InputPhoneWrapper isFullWidth={isFullWidth}>
      <Field
        name="phone"
        isFullHeight={true}
        validate={validate}
        required
        render={({ field }) => (
          <MaskedInput
            {...field}
            type="tel"
            placeholder="__-___-___-___"
            mask={[
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/
            ]}
            name={field.name}
            onChange={field.onChange}
          />
        )}
      />
      <ErrorMessage component={ErrorBlock} name="phone" />
    </InputPhoneWrapper>
  );
};

export default InputPhone;
