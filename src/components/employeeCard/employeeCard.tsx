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

  const renderEditMenu = () => {
    if (visible) {
      return <EditComponent listMenu={listOfObjects} />;
    }
  };

  return (
    <TouchableOpacity style={styles.cardStyle}>
      <View style={styles.nameStyle}>
        <Text>{employeeName}</Text>
      </View>
      <StatusIndicator statusName={status} />
      <TouchableOpacity
        onPress={editMenu}
        hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }}>
        <EditIcon style={styles.editIconStyle} />
      </TouchableOpacity>
      {renderEditMenu()}
    </TouchableOpacity>
  );
};

export default EmployeeCard;
