import { RouteProp } from '@react-navigation/native';
import { ScreenNames } from '@navigation/screenNames';

type ParamsList = {
  [ScreenNames.EmployeeDetails]: {
    id: number;
  };
};

export type EmployeeDetailScreenRouteProp = RouteProp<
  ParamsList,
  ScreenNames.EmployeeDetails
>;

export interface EmployeeDetailsScreenProps {
  route: EmployeeDetailScreenRouteProp;
}