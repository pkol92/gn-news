import { apiSecure, ApiUrl } from './axios';
import { useQuery } from 'react-query';

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

export const useGetNewsFromCountry = ({ country }: { country: string }) => {
  const getNews = async () => {
    const { data } = await apiSecure.get(`${ApiUrl.country}${country}`);
    console.log(data);
    return data as CountriesData;
  };

  return useQuery(['getNews', country], () => getNews());
};
