import React, { FunctionComponent } from 'react';
import { Text, View, Image } from 'react-native';
import { HomePageProps } from './types';
import styles from './styles';
import {
  DeleteIcon,
  EditPencilIcon,
  HamburgerIcon,
  ListIcon,
  PolygonIcon
} from '@assets/icons';
import { KvLogo } from '@assets/images';
import { Header, DropDown, EmployeeCard } from '@components';

const HomePage: FunctionComponent<HomePageProps> = () => {
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
          />
        </View>

        <View style={styles.profileHead}>
          <Text style={styles.nameTitleStyle}>Employee Name</Text>
          <Text style={styles.statusTitleStyle}>Status</Text>
        </View>

        <EmployeeCard employeeName="Vishal M" status="Probation" />
      </View>
    </>
  );
};

export default HomePage;
