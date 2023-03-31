import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CountriesData } from '../../api/getNews';
import { RootState } from '../../store/store';
import { Card } from '../Card/Card';
import { CardsWrapper, InfoWrapper } from './Panel.styles';
import { useTranslation } from 'react-i18next';

interface PanelProps {
  data: CountriesData | undefined;
  isError: boolean;
  isLoading: boolean;
}

export const Panel: FC<PanelProps> = ({ data, isError, isLoading }) => {
  const view = useSelector((state: RootState) => state.panelView.view);
  const { t } = useTranslation();

  if (!isLoading && data?.articles.length === 0) {
    return <InfoWrapper>{t('noArticles')}</InfoWrapper>;
  }

  return (
    <CardsWrapper isCard={view === 'card'}>
      {!isError &&
        data?.articles.map((article, index) => (
          <Card key={index} article={article} isCard={view === 'card'} />
        ))}

      {isError && <InfoWrapper>{t('unexpectedError')}</InfoWrapper>}
    </CardsWrapper>
  );
};
