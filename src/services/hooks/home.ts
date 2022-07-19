import { api } from '../api/api';

export const homeApi = api.injectEndpoints({
  endpoints: builder => ({
    getHomeContents: builder.query<any, void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    }),
  })
});

export const  { useGetHomeContentsQuery } = homeApi;
