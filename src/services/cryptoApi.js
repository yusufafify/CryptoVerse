import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders={
  'X-RapidAPI-Key': 'e7b628ff6dmshf89cab864e5a248p128d39jsn61f6427de35e',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi=createApi({
  reducerPath:'cryptoApi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder)=>({
    getCryptos:builder.query({
      query:(count)=>createRequest(`/coins?limit=${count}`)
    })
  })
});



export const {
  useGetCryptosQuery,
} = cryptoApi;