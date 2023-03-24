import React from 'react';
import { useGetNewsFromCountry } from '../../api/getNews';

export const Panel = () => {
  const { data } = useGetNewsFromCountry({ country: 'us' });
  console.log(data.articles);
  return <div>Panel</div>;
};
