import { api } from '../api/api';
import {
  GetEmpByIdPayloadType,
  EmployeeReqType,
  ResponseType,
  EmployeeRespType,
  IndividualEmployeeData
} from './types';

export const homeApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllEmployees: builder.query<EmployeeRespType, void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      }),
      providesTags: ['GET_EMPLOYEES']
    }),
    getEmployeeById: builder.query<
      IndividualEmployeeData,
      GetEmpByIdPayloadType
    >({
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
      }),
      invalidatesTags: ['GET_EMPLOYEES']
    }),

    editEmployee: builder.mutation<ResponseType, EmployeeReqType>({
      query: body => ({
        url: `/employees/${body.id}`,
        method: 'PUT',
        body: body
      }),
      invalidatesTags: ['GET_EMPLOYEES']
    }),

    deleteEmployee: builder.mutation<any, GetEmpByIdPayloadType>({
      query: payload => ({
        url: `/employees/${payload.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['GET_EMPLOYEES']
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
