export interface EmployeeReqType {
  id: number;
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

export interface EmployeeData {
  id: number;
  name: string;
  joiningDate: string;
  jobStatus: string;
  role: string;
  experience: string;
  address: string;
}

export interface IndividualEmployeeData {
  employee: EmployeeData;
}

export interface EmployeeRespType {
  employees: Array<EmployeeData>;
}
