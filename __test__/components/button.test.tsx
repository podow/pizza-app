import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../../app/components/Buttons';
import { IButtonProps } from '../../app/components/Buttons/interfaces';

describe('Button tests', () => {
  const props: IButtonProps = {
    children: 'test',
    type: 'submit',
    isSubscribeBlock: true,
    isWhite: true,
    isFullWidth: true
  };
  const wrapper = mount(<Button {...props}>test</Button>);
  beforeEach(() => {
    wrapper.mount();
  });
  afterEach(() => {
    wrapper.unmount();
  });
  test('Should render correctly the <span> children with -> test <- text', () => {
    const span = wrapper.find('span');
    // expect(wrapper.containsMatchingElement(<span>test</span>)).toBeTruthy(); это 2 способ найти span с текстом test
    expect(span.text()).toBe('test');
  });
  test('Should render correctly with type -> submit <- attr', () => {
    expect(wrapper.props().type).toBe('submit');
    // Тест на проверку измененного пропа type
    // await wrapper.setProps({ type: 'button' });
    // await expect(wrapper.props().type).toBe('button');
  });
  test('Check if isSubscribeBlock, isWhite, isFullWidth props are boolean', () => {
    const isSubscribeBlock = wrapper.props().isSubscribeBlock;
    const isFullWidth = wrapper.props().isFullWidth;
    const isWhite = wrapper.props().isWhite;
    expect(
      isSubscribeBlock === null || typeof isSubscribeBlock === 'boolean'
    ).toBeTruthy();
    expect(
      isFullWidth === null || typeof isFullWidth === 'boolean'
    ).toBeTruthy();
    expect(isWhite === null || typeof isWhite === 'boolean').toBeTruthy();
  });
});
