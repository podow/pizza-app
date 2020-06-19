import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumbs from '../../app/components/Breadcrumbs';

describe('Breadcrumbs', () => {
  it('Breadcrumbs component should render correctly with children prop', () => {
    shallow(<Breadcrumbs>test</Breadcrumbs>);
  });
});
