import { ReactNode, SyntheticEvent } from 'react';

export interface IButtonProps {
  children: ReactNode;
  isFullWidth?: boolean;
  isWhite?: boolean;
  isSubscribeBlock?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: SyntheticEvent) => void;
  style?: {};
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  as?: 'a' | 'button';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
}
