import React, { FunctionComponent } from 'react';

import { EmployeeDetailsScreenProps } from './types';

import EmployeeDetailsPage from '@pages/employeeDetails/employeeDetails';

const EmployeeDetailsScreen: FunctionComponent<EmployeeDetailsScreenProps> = (
  props: EmployeeDetailsScreenProps
) => <EmployeeDetailsPage {...props} />;

export default EmployeeDetailsScreen;
