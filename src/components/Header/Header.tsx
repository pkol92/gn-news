import React from 'react';
import { DropdownElement } from './Dropdown/Dropdown';

import { FakeHeaderWrapper, HeaderWrapper, LogoWrapper } from './Header.styles';
import { Modal } from './Modal/Modal';

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper> gnNews</LogoWrapper>
        <div>
          <DropdownElement />
          <Modal />
        </div>
      </HeaderWrapper>
      <FakeHeaderWrapper />
    </>
  );
};
