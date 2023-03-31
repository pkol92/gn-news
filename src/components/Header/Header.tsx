import React from 'react';
import { SideMenu } from '../SideMenu/SideMenu';
import { DropdownElement } from './Dropdown/Dropdown';

import { FakeHeaderWrapper, HeaderWrapper, LogoWrapper } from './Header.styles';
import { ModalMenu } from './Modal/Modal';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper> gnNews</LogoWrapper>
        <div>
          <DropdownElement />
          <ModalMenu />
        </div>
      </HeaderWrapper>
      <FakeHeaderWrapper />
    </>
  );
};
