import React from 'react';
import { DropdownElement } from './Dropdown/Dropdown';

import { HeaderWrapper, LogoWrapper } from './Header.styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper> gnNews</LogoWrapper>
      <DropdownElement />
    </HeaderWrapper>
  );
};
