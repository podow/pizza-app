import React from 'react';
import { ErrorMessage } from 'formik';

import { ErrorBlock, TextAreaStyled } from './style';

const TextArea = ({ field, ...props }) => {
  const { isNotRounded, filterProp, extraPaddingUnique } = props;

  return (
    <>
      <TextAreaStyled
        filterProp={filterProp}
        isNotRounded={isNotRounded}
        extraPaddingUnique={extraPaddingUnique}
        isFullHeight
        rows="5"
        {...field}
        {...props}
      />
      <ErrorMessage component={ErrorBlock} name={field.name} />
    </>
  );
};

export default TextArea;
