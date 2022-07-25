import { api } from '../api/api';
import {
  GetEmpByIdPayloadType,
  EmployeeReqType,
  ResponseType,
  EmployeeRespType
} from './types';

export const homeApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllEmployees: builder.query<any, void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    }),
    getEmployeeById: builder.query<any, GetEmpByIdPayloadType>({
      query: payload => ({
        url: `/employees/${payload.id}`,
        method: 'GET'
      })
    }),

    addEmployee: builder.mutation<{}, any>({
      query: body => ({
        url: `/employees`,
        method: 'POST',
        body: body
      })
    }),

    editEmployee: builder.mutation<ResponseType, EmployeeReqType>({
      query: body => ({
        url: `/employees/${body.id}`,
        method: 'PUT',
        body: body
      })
    }),

    deleteEmployee: builder.mutation<any, GetEmpByIdPayloadType>({
      query: payload => ({
        url: `/employees/${payload.id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useEditEmployeeMutation,
  useDeleteEmployeeMutation
} = homeApi;
