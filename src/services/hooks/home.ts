import { api } from '../api/api';

export const homeApi = api.injectEndpoints({
  endpoints: builder => ({
    getHomeContents: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET'
      })
    })
  })
});

export const { useGetHomeContentsQuery } = homeApi;
