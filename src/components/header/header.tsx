import React, { FunctionComponent } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { HamburgerIcon, ListIcon, PolygonIcon } from '@assets/icons';
import { KvLogo } from '@assets/images';

const Header: FunctionComponent = () => {
  return (
    <View style={styles.header}>
      <View style={styles.sample}>
        <HamburgerIcon style={styles.hIcon} />
        <Image source={KvLogo} style={styles.kvLogo} />
      </View>
    </View>
  );
};

export default Header;
