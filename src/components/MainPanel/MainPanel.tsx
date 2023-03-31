import React from 'react';
import { useOutlet } from 'react-router-dom';
import { SideMenu } from '../SideMenu/SideMenu';
import { InfoWrapper, MainWrapper } from './MainPanel.styles';

export const MainPanel = () => {
  const outlet = useOutlet();
  return (
    <MainWrapper>
      <SideMenu />
      {outlet || (
        <InfoWrapper>
          <h3>Witamy w gnNews!</h3>
          <h6>Wybierz kraj, z którego chcesz zobaczyć wiadomości.</h6>
        </InfoWrapper>
      )}
    </MainWrapper>
  );
};
