import React from 'react';
import { useSelector } from 'react-redux';
import { useGetNewsFromCountry } from '../../api/getNews';
import { RootState } from '../../store/store';
import { Card } from '../Card/Card';
import { CardsWrapper, InfoWrapper } from './Panel.styles';

export const Panel = () => {
  const pickedCountry = useSelector((state: RootState) => state.country.countryCode);
  const { data, isLoading, isError } = useGetNewsFromCountry({ country: pickedCountry });
  const view = useSelector((state: RootState) => state.panelView.view);

  if (!isLoading && data?.articles.length === 0) {
    return <InfoWrapper>Nie ma wiadomości z tego kraju</InfoWrapper>;
  }

  return (
    <CardsWrapper isCard={view === 'card'}>
      {!isError &&
        data?.articles.map((article, index) => (
          <Card key={index} article={article} isCard={view === 'card'} />
        ))}

      {isError && <InfoWrapper>Ups coś poszło nie tak</InfoWrapper>}
    </CardsWrapper>
  );
};
