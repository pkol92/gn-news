import React from 'react';
import { useGetNewsFromCountry } from '../../api/getNews';

export const Panel = () => {
  const { data } = useGetNewsFromCountry({ country: 'pt' });
  console.log(data);
  return <div>Panel</div>;
};
