import AddEmployeePage from '@pages/addEmployee/addEmployee';
import React, { FunctionComponent } from 'react';
import { AddEmployeeScreenProps } from './types';

const AddEmployeeScreen: FunctionComponent = (
  props: AddEmployeeScreenProps
) => <AddEmployeePage {...props} />;

export default AddEmployeeScreen;
