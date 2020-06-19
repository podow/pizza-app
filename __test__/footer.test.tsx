import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../app/components/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('Footer', () => {
  it('Footer should render correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
