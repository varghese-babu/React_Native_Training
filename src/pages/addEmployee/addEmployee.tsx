import React, { FunctionComponent, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';

import { Button, DropDown, Header } from '@components';
import { UploadIcon, BackIcon, DropDownIcon } from '@assets/icons';
import styles from './styles';

const AddEmployeePage: FunctionComponent = () => {
  const [name, onChangeName] = useState<string | null>(null);
  const [id, onChangeId] = useState<number | null>(null);
  const [dateValue, onChangeDate] = useState<string>('');
  const [experience, onChangeExperience] = useState<string | null>(null);
  const [address, onChangeAddress] = useState<string | null>(null);
  const [status, onChangeStatus] = useState<string | null>(null);
  const [role, onChangeRole] = useState<string | null>(null);

  console.log('Name: ', name);
  console.log('Id: ', id);
  console.log('Date: ', dateValue);
  console.log('Experience: ', experience);
  console.log('Address: ', address);
  console.log('Status: ', status);
  console.log('Role: ', role);

  return (
    <SafeAreaView style={styles.pageStyle}>
      <Header Icon={BackIcon} titleText="Add Employee" />

      <ScrollView style={styles.scrollViewStyle}>
        <View>
          <Text style={styles.name}>Employee Name</Text>
          <TextInput
            placeholder="Employee Name"
            style={styles.input}
            onChangeText={name => onChangeName(name)}
          />
        </View>

        <View>
          <Text style={styles.text}>Employee ID</Text>
          <TextInput
            placeholder="Employee ID"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={id => onChangeId(parseInt(id))}
          />
        </View>

        <View>
          <Text style={styles.name}>Joining Date</Text>
          <TextInput
            placeholder="Joining Date"
            style={styles.input}
            onChangeText={dateValue => onChangeDate(dateValue)}
          />
        </View>

        <View>
          <Text style={styles.text}>Status</Text>
          <DropDown
            text={status ? status : 'Select Status'}
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
            placeholder="Experience"
            style={styles.input}
            onChangeText={experience => onChangeExperience(experience)}
          />
        </View>

        <View>
          <Text style={styles.text}>Address</Text>
          <TextInput
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
          <TouchableOpacity style={styles.cancelButtonStyle}>
            <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButtonStyle}>
            <Text style={styles.addButtonTextStyle}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEmployeePage;
