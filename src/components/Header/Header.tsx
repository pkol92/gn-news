import React from 'react';
import { Dropdown } from './DropDown';
import { HeaderWrapper, LogoWrapper } from './Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>Logo</LogoWrapper>
      <Dropdown />
    </HeaderWrapper>
  );
};
