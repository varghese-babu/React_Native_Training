import { RouteProp } from '@react-navigation/native';
import { ScreenNames } from '@navigation/screenNames';

type ParamsList = {
  [ScreenNames.AddEmployee]: {
    id: string;
    isEditPage: boolean;
  };
};

export type AddEmployeeScreenRouteProp = RouteProp<
  ParamsList,
  ScreenNames.AddEmployee
>;

export interface AddEmployeeScreenProps {
  route: AddEmployeeScreenRouteProp;
}
