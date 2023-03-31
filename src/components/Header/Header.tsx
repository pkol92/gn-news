import React from 'react';
import { DropdownElement } from './Dropdown/Dropdown';
import { ActionsWrapper, FakeHeaderWrapper, HeaderWrapper, LogoWrapper } from './Header.styles';
import { ModalMenu } from './Modal/Modal';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../slices/languageSlice';
import { ReactComponent as PlFlag } from '../../icons/pl.svg';
import { ReactComponent as GbFlag } from '../../icons/gb.svg';

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper to={'/'}>{t('logo')}</LogoWrapper>
        <ActionsWrapper>
          <DropdownElement />
          <ModalMenu />
          <button onClick={() => dispatch(setLanguage('pl'))}>
            <PlFlag width={20} height={10} />
          </button>
          <button onClick={() => dispatch(setLanguage('en'))}>
            <GbFlag width={20} height={10} />
          </button>
        </ActionsWrapper>
      </HeaderWrapper>
      <FakeHeaderWrapper />
    </>
  );
};
