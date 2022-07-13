import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { EditPencilIcon, DeleteIcon } from '@assets/icons';
import { EditComponentParams } from './types';

const EditComponent: FunctionComponent<EditComponentParams> = (
  props: EditComponentParams
) => {
  const { listMenu } = props;
  return (
    <View style={styles.editBoxStyle}>
      {listMenu.map(listItem => (
        <TouchableOpacity onPress={listItem.onPress} style={styles.editStyle}>
          <listItem.icon style={styles.pencilIconStyle} />
          <Text style={styles.textStyle}>{listItem.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EditComponent;
