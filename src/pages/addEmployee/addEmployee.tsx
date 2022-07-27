import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';

import { Button, DropDown, Header, ModalComponent } from '@components';
import {
  UploadIcon,
  BackIcon,
  DropDownIcon,
  EditEmployeeIcon
} from '@assets/icons';

import { ScreenNames } from '@navigation/screenNames';
import {
  goBack,
  navigateAndReset,
  navigateTo
} from '@services/navigation/navigationService';
import {
  useAddEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeeByIdQuery
} from '@services/hooks/employee';
import { AddEmployeePageParams } from './types';

import styles from './styles';

const AddEmployeePage: FunctionComponent<AddEmployeePageParams> = ({
  route
}) => {
  const { id, isEditPage } = route?.params || '';

  const [name, onChangeName] = useState<string>('');
  const [dateValue, onChangeDate] = useState<string>('');
  const [experience, onChangeExperience] = useState<string>('');
  const [address, onChangeAddress] = useState<string>('');
  const [jobStatus, onChangeStatus] = useState<string>('');
  const [role, onChangeRole] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);

  const [addEmployee, response] = useAddEmployeeMutation();
  const [editEmployee, editResponse] = useEditEmployeeMutation();
  const { data } = useGetEmployeeByIdQuery({ id: parseInt(id) });

  useEffect(() => {
    if (isEditPage && data) {
      onChangeName(data?.employee.name);
      onChangeDate(data?.employee.joiningDate.substring(0, 10));
      onChangeExperience(data?.employee.experience);
      onChangeAddress(data?.employee.address);
      onChangeStatus(data?.employee.jobStatus);
      onChangeRole(data?.employee.role);
    }
  }, [data]);

  const dataLocal = {
    id: data?.employee.id || 0,
    name: name,
    joiningDate: dateValue?.substring(0, 10),
    jobStatus: jobStatus,
    role: role,
    experience: experience,
    address: address
  };

  const onPressHandler = () => {
    isEditPage ? editEmployee(dataLocal) : addEmployee(dataLocal);
  };

  const handleModalClose = () => {
    setModalVisible(false);

    if (isEditPage) {
      navigateAndReset(ScreenNames.Home);
    } else {
      goBack();
    }
  };

  useEffect(() => {
    if (response.isSuccess) {
      setModalVisible(true);
    } else if (response.isError) {
      alert('error');
    }
  }, [response]);

  useEffect(() => {
    if (editResponse.isSuccess) {
      setModalVisible(true);
    } else if (editResponse.isError) {
      alert('error');
    }
  }, [editResponse]);

  return (
    <>
      <ModalComponent
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
        isEdit={isEditPage}
      />
      <SafeAreaView style={styles.pageStyle}>
        <Header Icon={BackIcon} titleText="Add Employee" onIconPress={goBack} />

        <ScrollView style={styles.scrollViewStyle}>
          <View>
            <Text style={styles.name}>Employee Name</Text>
            <TextInput
              value={name}
              placeholder="Employee Name"
              style={styles.input}
              onChangeText={name => onChangeName(name)}
            />
          </View>

          {isEditPage && (
            <View>
              <Text style={styles.text}>Employee ID</Text>
              <TextInput
                value={id.toString()}
                style={styles.input}
                editable={false}
              />
            </View>
          )}

          <View>
            <Text style={styles.name}>Joining Date</Text>
            <TextInput
              value={dateValue}
              placeholder="Joining Date"
              style={styles.input}
              onChangeText={dateValue => onChangeDate(dateValue)}
            />
          </View>

          <View>
            <Text style={styles.text}>Status</Text>
            <DropDown
              text={jobStatus ? jobStatus : 'Select Status'}
              DropIcon={DropDownIcon}
              values={['Probation', 'Active', 'Inactive']}
              style={styles.input}
              updateValue={onChangeStatus}
            />
          </View>

          <View>
            <Text style={styles.text}>Role</Text>
            <DropDown
              text={role ? role : 'Select Role'}
              DropIcon={DropDownIcon}
              values={['Developer', 'Tester', 'DevOps', 'HR']}
              style={styles.input}
              updateValue={onChangeRole}
            />
          </View>

          <View>
            <Text style={styles.text}>Experience (Years)</Text>
            <TextInput
              value={experience}
              placeholder="Experience"
              style={styles.input}
              onChangeText={experience => onChangeExperience(experience)}
            />
          </View>

          <View>
            <Text style={styles.text}>Address</Text>
            <TextInput
              value={address}
              placeholder="Address"
              style={styles.addressStyle}
              onChangeText={address => onChangeAddress(address)}
            />
          </View>

          <View style={styles.uploadViewStyle}>
            <TouchableOpacity>
              <UploadIcon style={styles.uploadIconStyle} />
            </TouchableOpacity>
            <Text style={styles.uploadTextStyle}>Upload ID Proof</Text>
          </View>

          <View style={styles.bottomButtonStyle}>
            <TouchableOpacity style={styles.cancelButtonStyle} onPress={goBack}>
              <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addButtonStyle}
              onPress={onPressHandler}>
              <Text style={styles.addButtonTextStyle}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddEmployeePage;
