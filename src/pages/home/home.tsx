import React, { FunctionComponent, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { HomePageProps } from './types';
import styles from './styles';
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
import Svg from 'react-native-svg';
import { EmployeeData, EmployeeReqType } from '@services/hooks/types';
import { useFocusEffect } from '@react-navigation/native';

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [status, onChangeStatus] = useState<string>('');

  const { data, refetch: fetch } = useGetAllEmployeesQuery();
  const value = data?.employees;

  const [deleteEmployee] = useDeleteEmployeeMutation();

  const renderFunction = (item: EmployeeData) => {
    <EmployeeCard
      employeeName={item.name}
      status={item.jobStatus}
      onCardClick={() =>
        navigateTo(ScreenNames.EmployeeDetails, { id: item.id })
      }
    />;
  };

  useFocusEffect(() => {
    fetch();
  });

  return (
    <>
      <View style={styles.container}>
        <Header Icon={HamburgerIcon} titleImage={KvLogo} />

        <View style={styles.listTitle}>
          <Text style={styles.listHeadText}>Employee List</Text>
          <DropDown
            Icon={ListIcon}
            text="Status"
            values={['probation', 'active', 'inactive']}
            DropIcon={PolygonIcon}
            updateValue={onChangeStatus}
          />
        </View>

        <View style={styles.profileHead}>
          <Text style={styles.nameTitleStyle}>Employee Name</Text>
          <Text style={styles.statusTitleStyle}>Status</Text>
        </View>
        <FlatList
          data={value}
          renderItem={({ item }) => (
            <EmployeeCard
              employeeName={item.name}
              status={item.jobStatus}
              onCardClick={() =>
                navigateTo(ScreenNames.EmployeeDetails, { id: item.id })
              }
            />
          )}
        />
        <TouchableOpacity
          style={styles.floatStyle}
          onPress={() => navigateTo(ScreenNames.AddEmployee)}>
          <Text style={styles.floatTextStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomePage;
