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

import { HomePageProps } from './types';

import styles from './styles';

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [status, onChangeStatus] = useState<string>('status');

  const { data, refetch: fetch } = useGetAllEmployeesQuery();
  const value = data?.employees;

  const [deleteEmployee] = useDeleteEmployeeMutation();
  const navigateToPage = (idParam?: number) => {
    idParam
      ? navigateTo(ScreenNames.EmployeeDetails, { id: idParam })
      : navigateTo(ScreenNames.AddEmployee);
  };

  useEffect(() => {
    fetch();
    setEmployeeData(
      status !== 'status'
        ? value?.filter(employee => employee.jobStatus === status)
        : value
    );
  }, [status, value]);

  const [employeeData, setEmployeeData] = useState<EmployeeData[]>();

  const renderFunction = ({ item }: { item: EmployeeData; index: number }) => (
    <EmployeeCard
      employeeName={item.name}
      status={item.jobStatus}
      onCardClick={() => navigateToPage(item.id)}
      employeeId={data?.employees[0]?.id || 0}
    />
  );

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
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
            values={['Probation', 'active', 'inactive']}
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
