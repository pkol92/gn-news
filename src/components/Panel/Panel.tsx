import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CountriesData } from '../../api/getNews';
import { RootState } from '../../store/store';
import { Card } from '../Card/Card';
import { CardsWrapper, InfoWrapper } from './Panel.styles';

interface PanelProps {
  data: CountriesData | undefined;
  isError: boolean;
  isLoading: boolean;
}

export const Panel: FC<PanelProps> = ({ data, isError, isLoading }) => {
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
