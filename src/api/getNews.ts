import { apiSecure, ApiUrl } from './axios';

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

export const countryQuery = (country: string | undefined) => ({
  isQueryKey: ['getNews', country],
  queryFn: async () => getNews(country),
});
