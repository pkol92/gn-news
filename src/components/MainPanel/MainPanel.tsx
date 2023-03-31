import React from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { countryQuery } from '../../api/getNews';
import { Footer } from '../Footer/Footer';
import { Panel } from '../Panel/Panel';
import { SideMenu } from '../SideMenu/SideMenu';
import { MainWrapper } from './MainPanel.styles';

export const MainPanel = () => {
  const outlet = useOutlet();
  const { data, isLoading, isError } = useQuery(countryQuery('us'));

  return (
    <MainWrapper>
      <SideMenu />
      {outlet || (
        <>
          <Panel data={data} isError={isError} isLoading={isLoading} />
          <Footer articlesNumber={data?.articles.length} />
        </>
      )}
    </MainWrapper>
  );
};
