import { PolygonIcon } from '@assets/icons';
import styles from './styles';
import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DropDownParams } from './types';
import { useState } from 'react';

const DropDown: FunctionComponent<DropDownParams> = (props: DropDownParams) => {
  const { Icon, text, DropIcon, values, style, updateValue } = props;

  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const updateFunction = (statusValue: string) => {
    setVisible(false);
    updateValue(statusValue);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={Icon ? styles.statusView : styles.statusAndRole}>
          {values.map(statusValue => (
            <TouchableOpacity
              style={styles.statusText}
              onPress={() => updateFunction(statusValue)}>
              <Text>{statusValue}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.buttonTouch}>
        <View style={styles.buttonStyle}>
          {Icon ? (
            <>
              <View style={styles.marginStyle}>
                <Icon />
              </View>
              <View style={styles.marginStyle}>
                <Text style={style}>{text}</Text>
              </View>

              <View style={styles.marginStyle}>
                <DropIcon />
              </View>
            </>
          ) : (
            <>
              <View style={styles.statusDropDownStyle}>
                <Text>{text}</Text>
                <DropIcon />
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  );
};

export default DropDown;
