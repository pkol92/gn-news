import React from 'react';
import { useSelector } from 'react-redux';
import { useGetNewsFromCountry } from '../../api/getNews';
import { RootState } from '../../store/store';
import { Footer } from '../Footer/Footer';
import { Panel } from '../Panel/Panel';
import { SideMenu } from '../SideMenu/SideMenu';
import { MainWrapper } from './MainPanel.styles';

export const MainPanel = () => {
  const pickedCountry = useSelector((state: RootState) => state.country.countryCode);
  const { data, isLoading, isError } = useGetNewsFromCountry({ country: pickedCountry });

  return (
    <MainWrapper>
      <SideMenu />
      <Panel data={data} isError={isError} isLoading={isLoading} />
      <Footer articlesNumber={data?.articles.length} />
    </MainWrapper>
  );
};
