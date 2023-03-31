import React, { useEffect, useState } from 'react';
import { FooterWrapper } from './Footer.styles';
import { useTranslation } from 'react-i18next';

export const Footer = ({ articlesNumber }: { articlesNumber: number | undefined }) => {
  const [date, setDate] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <FooterWrapper>
      <p> {t('articlesNumber', { articlesNumber })} </p>
      <p>{date.toLocaleTimeString()}</p>
    </FooterWrapper>
  );
};
