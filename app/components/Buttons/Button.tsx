import React from 'react';
import { ButtonStyle, ButtonLabel } from './styles';

import { BtnLoaderBlock } from '../Loader/style';
import { IButtonProps } from 'interfaces/components/button';

export const Button: React.FC<IButtonProps> = props => {
  const {
    children,
    isWhite,
    isFullWidth,
    isSubscribeBlock,
    type,
    onClick,
    style,
    loading,
    size,
    disabled
  } = props;

  return (
    <ButtonStyle
      isSubscribeBlock={isSubscribeBlock}
      isWhite={isWhite}
      isFullWidth={isFullWidth}
      type={type}
      onClick={onClick}
      style={style}
      size={size}
      disabled={disabled}
      {...props}
    >
      <ButtonLabel isSubscribeBlock={isSubscribeBlock} isWhite={isWhite}>
        {!loading ? children : <BtnLoaderBlock />}
      </ButtonLabel>
    </ButtonStyle>
  );
};
