import React from 'react';
import cn from 'classnames';

interface Props {
  label: string;
  onClick?: () => void;
  tag?: string;
  active?: boolean;
}

const Tab: React.FC<Props> = ({ tag, label, onClick, active }) =>
  React.createElement(
    tag || 'div',
    {
      onClick,
      className: cn('tabs__control', { tabs__control_active: active })
    },
    label
  );

export default Tab;
