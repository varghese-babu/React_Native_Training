export interface EmployeeReqType {
  id?: string;
  name: string;
  joiningDate: string;
  jobStatus: string;
  role: string;
  experience: string;
  address: string;
}

export interface GetEmpByIdPayloadType {
  id: number;
}

export interface ResponseType {
  status?: string;
  result?: string;
  error?: string;
}

export interface EmployeeRespType {
  employee: {
    id?: string;
    name: string;
    joiningDate: string;
    jobStatus: string;
    role: string;
    experience: string;
    address: string;
  };
}
