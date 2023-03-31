import { apiSecure, ApiUrl } from './axios';
import { useQuery } from 'react-query';
import { isQueryKey } from 'react-query/types/core/utils';

export type Article = {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};

export type CountriesData = {
  articles: Array<Article>;
  status: string;
  totalResult: number;
};

export const getNews = async (country: string | undefined) => {
  const { data } = await apiSecure.get(`${ApiUrl.country}${country}`);
  return data as CountriesData;
};

// export const useCountryQuery = (country: string | undefined) => {
//   useQuery(['getNews', country], () => getNews(country));
// };

export const countryQuery = (country: string | undefined) => ({
  isQueryKey: ['getNews', country],
  queryFn: async () => getNews(country),
});

// export const useGetNewsFromCountry = ({ country }: { country: string | undefined }) => {
//   const getNews = async () => {
//     const { data } = await apiSecure.get(`${ApiUrl.country}${country}`);
//     console.log(data);
//     return data as CountriesData;
//   };

//   return useQuery(['getNews', country], () => getNews());
// };
