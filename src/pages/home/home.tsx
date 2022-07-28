import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {
  UploadIcon,
  HamburgerIcon,
  ListIcon,
  PolygonIcon
} from '@assets/icons';
import { KvLogo } from '@assets/images';
import { Header, DropDown, EmployeeCard, ModalComponent } from '@components';
import { navigateTo } from '@services/navigation/navigationService';
import { ScreenNames } from '@navigation/screenNames';
import {
  useGetAllEmployeesQuery,
  useDeleteEmployeeMutation
} from '@services/hooks/employee';
import { EmployeeData, EmployeeReqType } from '@services/hooks/types';
import { JOB_STATUS_VALUES } from '@constants/common';

import { HomePageProps } from './types';

import styles from './styles';

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [status, onChangeStatus] = useState<string>('status');
  const [employeeData, setEmployeeData] = useState<EmployeeData[]>();
  const { data, refetch: fetch } = useGetAllEmployeesQuery();
  const value = data?.employees;

  const navigateToPage = (idParam?: number) => {
    idParam
      ? navigateTo(ScreenNames.EmployeeDetails, { id: idParam })
      : navigateTo(ScreenNames.AddEmployee);
  };

  useEffect(() => {
    fetch();
    const newValue =
      status !== 'status'
        ? value?.filter(employee => employee.jobStatus === status)
        : value;
    setEmployeeData(newValue);
  }, [status, value]);

  const renderFunction = ({ item }: { item: EmployeeData; index: number }) => (
    <EmployeeCard
      employeeName={item.name}
      status={item.jobStatus}
      onCardClick={() => navigateToPage(item.id)}
      employeeId={item.id || 0}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <Header Icon={HamburgerIcon} titleImage={KvLogo} />

        <View style={styles.listTitle}>
          <Text style={styles.listHeadText}>Employee List</Text>
          <DropDown
            Icon={ListIcon}
            text={status ? status : 'status'}
            values={[
              JOB_STATUS_VALUES.Probation,
              JOB_STATUS_VALUES.Active,
              JOB_STATUS_VALUES.Inactive
            ]}
            DropIcon={PolygonIcon}
            updateValue={onChangeStatus}
          />
        </View>

        <View style={styles.profileHead}>
          <Text style={styles.nameTitleStyle}>Employee Name</Text>
          <Text style={styles.statusTitleStyle}>Status</Text>
        </View>
        <FlatList data={employeeData} renderItem={renderFunction} />
        <TouchableOpacity
          style={styles.floatStyle}
          onPress={() => navigateToPage()}>
          <Text style={styles.floatTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomePage;
