import React, { FunctionComponent } from 'react';

import { AddEmployeeScreenProps } from './types';

import AddEmployeePage from '@pages/addEmployee/addEmployee';

const AddEmployeeScreen: FunctionComponent = (
  props: AddEmployeeScreenProps
) => <AddEmployeePage {...props} />;

export default AddEmployeeScreen;
