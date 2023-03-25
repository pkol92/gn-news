import React from 'react';
import { useGetNewsFromCountry } from '../../api/getNews';
import { Card } from '../Card/Card';
import { CardsWrapper, InfoWrapper } from './Panel.styles';

export const Panel = () => {
  const { data, isLoading, isError } = useGetNewsFromCountry({ country: 'us' });

  if (!isLoading && data?.articles.length === 0) {
    return <InfoWrapper>Nie ma wiadomości z tego kraju</InfoWrapper>;
  }

  return (
    <CardsWrapper isCard={false}>
      {!isError && data?.articles.map((article, index) => <Card key={index} article={article} />)}

      {isError && <InfoWrapper>Ups coś poszło nie tak</InfoWrapper>}
    </CardsWrapper>
  );
};
