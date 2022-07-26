import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { EditPencilIcon, DeleteIcon, EditIcon } from '@assets/icons';
import { EditComponentParams } from './types';
import { Menu } from 'react-native-paper';

const EditComponent: FunctionComponent<EditComponentParams> = (
  props: EditComponentParams
) => {
  const { listMenu, visible, hideMenu, editMenu } = props;

  return (
    <Menu
      visible={visible}
      onDismiss={hideMenu}
      anchor={
        <TouchableOpacity
          onPress={editMenu}
          hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }}>
          <EditIcon style={styles.editIconStyle} />
        </TouchableOpacity>
      }
      contentStyle={styles.editBoxStyle}>
      {listMenu.map(listItem => (
        <TouchableOpacity
          key={listItem.name}
          onPress={listItem.onPress}
          style={styles.editStyle}>
          <listItem.icon style={styles.pencilIconStyle} />
          <Text style={styles.textStyle}>{listItem.name}</Text>
        </TouchableOpacity>
      ))}
    </Menu>
  );
};

export default EditComponent;
