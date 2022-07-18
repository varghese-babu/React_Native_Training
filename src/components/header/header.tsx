import React, { FunctionComponent } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { HamburgerIcon, ListIcon, PolygonIcon } from '@assets/icons';
import { KvLogo } from '@assets/images';
import { HeaderParams } from './types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header: FunctionComponent<HeaderParams> = (props: HeaderParams) => {

  const {Icon, titleImage, titleText, style } = props;
  return (
    <View style={[styles.header,style]}>
      <View style={styles.sample}>
        <TouchableOpacity style={styles.hIcon}><Icon  /></TouchableOpacity>
        {titleImage?(<Image source={titleImage} style={styles.kvLogo} />): <Text style={styles.textStyle}>{titleText}</Text>}
        
      </View>
    </View>
  );
};

export default Header;
