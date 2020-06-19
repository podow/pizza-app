import React from 'react';

import { LoaderBlock } from './style';

const Loader = ({ ...props }) => {
  return (
    <LoaderBlock>
      <div className="loader" {...props} />
    </LoaderBlock>
  );
};

export default Loader;
