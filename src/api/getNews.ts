import { apiSecure, ApiUrl } from './axios';
import { useQuery } from 'react-query';

export const useGetNewsFromCountry = ({ country }: { country: string }) => {
  const getNews = async () => {
    const { data } = await apiSecure.get(`${ApiUrl.country}${country}`);
    console.log(data);
    return data;
  };

  return useQuery(['getNews', country], () => getNews());
};
