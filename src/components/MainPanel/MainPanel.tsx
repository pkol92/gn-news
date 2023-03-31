import React from 'react';
import { Panel } from '../Panel/Panel';
import { SideMenu } from '../SideMenu/SideMenu';
import { MainWrapper } from './MainPanel.styles';

export const MainPanel = () => {
  return (
    <MainWrapper>
      <SideMenu />
      <Panel />
    </MainWrapper>
  );
};
