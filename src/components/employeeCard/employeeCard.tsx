import React, { FunctionComponent, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { EmployeeCardParams } from './types';
import styles from './styles';
import { EditIcon, EditPencilIcon, DeleteIcon } from '@assets/icons';
import StatusIndicator from '../statusIndicator/statusIndicator';
import EditComponent from '../editComponent/editComponent';

const EmployeeCard: FunctionComponent<EmployeeCardParams> = (
  props: EmployeeCardParams
) => {
  const { employeeName, status } = props;
  const listOfObjects = [
    {
      name: 'Edit',
      icon: EditPencilIcon,
      onPress: null
    },

    {
      name: 'Delete',
      icon: DeleteIcon,
      onPress: null
    }
  ];

  const [visible, setVisible] = useState(false);

  const editMenu = () => {
    setVisible(!visible);
  };

  const hideMenu = () => {
    setVisible(false);
  };


  return (
    <TouchableOpacity style={styles.cardStyle}>
      <View style={styles.nameStyle}>
        <Text>{employeeName}</Text>
      </View>
      <StatusIndicator statusName={status} />
      <EditComponent
          listMenu={listOfObjects}
          visible={visible}
          hideMenu={hideMenu}
          editMenu = {editMenu}
        />
    </TouchableOpacity>
  );
};

export default EmployeeCard;
