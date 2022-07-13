import React, { FunctionComponent } from 'react';
import { View, Text } from 'native-base';
import { StatusIndicatorParams } from './types';
import styles from './styles';

const StatusIndicator: FunctionComponent<StatusIndicatorParams> = (
  props: StatusIndicatorParams
) => {
  const { statusName } = props;

  return (
    <View style={styles.indicatorStyle}>
      <Text>{statusName}</Text>
    </View>
  );
};

export default StatusIndicator;
