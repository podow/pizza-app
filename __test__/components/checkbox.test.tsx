import React from 'react';
import { mount } from 'enzyme';
import Checkbox from '../../app/components/Checkbox';

describe('Checkbox', () => {
  const props = {
    id: 'test',
    name: 'test',
    field: {},
    labelValue: 'test'
  };

  const wrapper = mount(<Checkbox {...props} />);

  beforeEach(() => {
    wrapper.mount();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  const input = wrapper.find('input');

  test('Checkbox should render correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Checkbox should have label tag', () => {
    const label = wrapper.find('label');
    expect(label.text()).toBe('test');
  });
  test('with name', () => {
    expect(wrapper.props().name).toBe('test');
  });
  test('with id', () => {
    expect(wrapper.props().id).toBe('test');
  });
  test('with labelValue', () => {
    expect(wrapper.props().labelValue).toBe('test');
  });
  test('with field', () => {
    expect(wrapper.props().field).toStrictEqual({});
  });
});
