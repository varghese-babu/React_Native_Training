import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders: async headers => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: () => ({})
});
