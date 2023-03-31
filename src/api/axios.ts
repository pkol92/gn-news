import axiosLib from 'axios';

const BASE_URL = 'https://newsapi.org/v2/';
// const API_KEY = 'e412a86a7f0c4c779917cd632550bf20';
const API_KEY = '5b520d159af842279c0c8c3973fd1189';

export enum ApiUrl {
  country = 'top-headlines?sortBy=publishedAt&pageSize=99&country=',
}

export const apiSecure = axiosLib.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});
