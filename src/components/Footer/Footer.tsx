import React, { useEffect, useState } from 'react';
import { FooterWrapper } from './Footer.styles';

export const Footer = ({ articlesNumber }: { articlesNumber: number | undefined }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <FooterWrapper>
      <p>Liczba artykułów: {articlesNumber} </p>
      <p>{date.toLocaleTimeString()}</p>
    </FooterWrapper>
  );
};
