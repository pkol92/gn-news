import React from 'react';
import i18n from 'i18next';
import { DropdownElement } from './Dropdown/Dropdown';
import { ActionsWrapper, FakeHeaderWrapper, HeaderWrapper, LogoWrapper } from './Header.styles';
import { ModalMenu } from './Modal/Modal';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper to={'/'}>{t('logo')}</LogoWrapper>
        <ActionsWrapper>
          <DropdownElement />
          <ModalMenu />
          <button onClick={() => i18n.changeLanguage('pl')}>pl</button>
          <button onClick={() => i18n.changeLanguage('en')}>en</button>
        </ActionsWrapper>
      </HeaderWrapper>
      <FakeHeaderWrapper />
    </>
  );
};
