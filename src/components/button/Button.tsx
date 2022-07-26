import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonParams } from './types';

import styles from './styles';

const Button: FunctionComponent<ButtonParams> = (props: ButtonParams) => {
  const { handleButtonClick, label } = props;

  return (
    <TouchableOpacity style={styles.addButton} onPress={handleButtonClick}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
