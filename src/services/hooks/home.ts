import { api } from '../api/api';

export const homeApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllEmployees: builder.query<any, void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    }),
  })
});

export const  { useGetAllEmployeesQuery } = homeApi;
