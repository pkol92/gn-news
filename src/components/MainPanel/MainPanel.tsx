import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '../../store/store';
import { Footer } from '../Footer/Footer';
import { Panel } from '../Panel/Panel';
import { SideMenu } from '../SideMenu/SideMenu';
import { MainWrapper } from './MainPanel.styles';

export const MainPanel = () => {
  return (
    <MainWrapper>
      <SideMenu />
      <Outlet />
    </MainWrapper>
  );
};
