import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['GET_EMPLOYEES'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.147:7001',
    prepareHeaders: async headers => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: () => ({})
});
