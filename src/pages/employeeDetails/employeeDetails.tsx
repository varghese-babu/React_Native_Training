import React, { FunctionComponent, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { BackIcon, EditEmployeeIcon, EditPencilIcon } from '@assets/icons';
import { Header, StatusIndicator } from '@components';
import { goBack, navigateTo } from '@services/navigation/navigationService';
import { EmployeeDetailsPageParams } from './types';
import { IdProofIcon } from '@assets/icons';
import { useGetEmployeeByIdQuery } from '@services/hooks/employee';

import styles from './styles';
import { ScreenNames } from '@navigation/screenNames';
import { useFocusEffect } from '@react-navigation/native';

const EmployeeDetailsPage: FunctionComponent<EmployeeDetailsPageParams> = ({
  route
}) => {
  const { id } = route?.params || '';
  const { data, refetch } = useGetEmployeeByIdQuery({ id: parseInt(id) });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <View style={styles.detailsViewStyle}>
      <Header
        Icon={BackIcon}
        titleText="Employee Details"
        onIconPress={goBack}
      />

      <View style={styles.rowStyle}>
        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Employee Name</Text>
          <Text>{data?.employee.name}</Text>
        </View>
        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Employee ID</Text>
          <Text>{data?.employee.id}</Text>
        </View>
      </View>

      <View style={styles.rowStyle}>
        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Joining Date</Text>
          <Text>{data?.employee.joiningDate.substring(0, 10)}</Text>
        </View>

        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Status</Text>
          <StatusIndicator
            statusName={data?.employee?.jobStatus || ''}
            style={styles.indicatorStyle}
          />
        </View>
      </View>

      <View style={styles.rowStyle}>
        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Role</Text>
          <Text>{data?.employee.role}</Text>
        </View>

        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Experience</Text>
          <Text>{data?.employee.experience}</Text>
        </View>
      </View>

      <View style={styles.rowStyle}>
        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}>Address</Text>
          <Text>{data?.employee.address}</Text>
        </View>
      </View>
      <View style={styles.rowStyle}>
        <View style={styles.innerStyle}>
          <Text style={styles.textStyle}> ID Proof</Text>
          <IdProofIcon />
        </View>
      </View>
      <TouchableOpacity
        style={styles.editIconStyle}
        onPress={() =>
          navigateTo(ScreenNames.AddEmployee, {
            id: data?.employee?.id,
            isEditPage: true
          })
        }>
        <EditEmployeeIcon />
      </TouchableOpacity>
    </View>
  );
};

export default EmployeeDetailsPage;
