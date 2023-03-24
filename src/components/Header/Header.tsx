import React from 'react';
import { useGetNewsFromCountry } from '../../api/getNews';
import { DropdownElement } from './Dropdown/Dropdown';

import { HeaderWrapper, LogoWrapper } from './Header.styles';
import { Modal } from './Modal/Modal';

export const Header = () => {
  const { data } = useGetNewsFromCountry({ country: 'us' });
  console.log(data);
  return (
    <HeaderWrapper>
      <LogoWrapper> gnNews</LogoWrapper>
      <div>
        <DropdownElement />
        <Modal />
      </div>
    </HeaderWrapper>
  );
};
