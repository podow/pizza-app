import React, { Children } from 'react';

import { Breadcrumbs } from './style';

import { IBreadcrumbsProps } from 'interfaces/components/breadcrumbs';

const BreadCrumbs: React.FC<IBreadcrumbsProps> = props => {
  const { children, isHided } = props;

  return (
    <Breadcrumbs isHided={isHided ? isHided : false}>
      {Children.map(children, breadcrumbs => (
        <li>{breadcrumbs}</li>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
