import React, { FunctionComponent, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { HomePageProps } from './types';
import styles from './styles';
import {
  UploadIcon,
  HamburgerIcon,
  ListIcon,
  PolygonIcon
} from '@assets/icons';
import { KvLogo } from '@assets/images';
import { Header, DropDown, EmployeeCard } from '@components';
import { navigateTo } from '@services/navigation/navigationService';
import { ScreenNames } from '@navigation/screenNames';
import { useGetAllEmployeesQuery } from '@services/hooks/home';
import Svg from 'react-native-svg';

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [status, onChangeStatus] = useState<string | null>(null);

  const resp = useGetAllEmployeesQuery();
  console.log(resp?.data?.employees[0]);
  return (
    <>
      <View style={styles.container}>
        <Header
          Icon={HamburgerIcon}
          titleImage={KvLogo}
          onIconPress={() => null}
        />

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

        <EmployeeCard employeeName="Vishal M" status="Probation" />
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
