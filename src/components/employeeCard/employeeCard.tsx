import React, { FunctionComponent, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { EditIcon, EditPencilIcon, DeleteIcon } from '@assets/icons';
import { StatusIndicator, EditComponent } from '@components';

import { EmployeeCardParams } from './types';
import styles from './styles';

const EmployeeCard: FunctionComponent<EmployeeCardParams> = (
  props: EmployeeCardParams
) => {
  const { employeeName, status, onCardClick } = props;
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
    <TouchableOpacity style={styles.cardStyle} onPress={onCardClick}>
      <View style={styles.nameStyle}>
        <Text>{employeeName}</Text>
      </View>
      <StatusIndicator
        statusName={status}
        style={styles.statusIndicatorStyle}
      />
      <View style={styles.editComponentStyle}>
        <EditComponent
          listMenu={listOfObjects}
          visible={visible}
          hideMenu={hideMenu}
          editMenu={editMenu}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeCard;
