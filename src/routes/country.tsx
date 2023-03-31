import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { Params, useParams } from 'react-router-dom';
import { countryQuery } from '../api/getNews';
import { Footer } from '../components/Footer/Footer';
import { Panel } from '../components/Panel/Panel';

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params<string> }) => {
    const query = countryQuery(params.countryCode);
    return queryClient.getQueryData('getNews') ?? (await queryClient.fetchQuery(query));
  };

export const Country = () => {
  const params = useParams();
  const { data, isLoading, isError } = useQuery(countryQuery(params.countryCode));

  return (
    <>
      <Panel data={data} isError={isError} isLoading={isLoading} />
      <Footer articlesNumber={data?.articles.length} />
    </>
  );
};
