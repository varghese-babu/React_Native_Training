import { PolygonIcon } from '@assets/icons';
import styles from './styles';
import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DropDownParams } from './types';
import { useState } from 'react';

const DropDown: FunctionComponent<DropDownParams> = (props: DropDownParams) => {
  const { Icon, text, values } = props;

  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.statusView}>
          {values.map(statusValue => (
            <View style={styles.statusText}>
              <Text>{statusValue}</Text>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown} style={styles.buttonTouch}>
        <View style={styles.buttonStyle}>
          <View style={styles.marginStyle}>
            <Icon></Icon>
          </View>
          <View style={styles.marginStyle}>
            <Text>{text}</Text>
          </View>
          <View style={styles.marginStyle}>
            <PolygonIcon></PolygonIcon>
          </View>
        </View>
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

export default DropDown;
