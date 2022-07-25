import React, { FunctionComponent } from 'react';
import { View, Text } from 'native-base';
import { StatusIndicatorParams } from './types';
import styles from './styles';

const StatusIndicator: FunctionComponent<StatusIndicatorParams> = (
  props: StatusIndicatorParams
) => {
  const { statusName, style } = props;

  const bgcolor = (() => {
    if (statusName === 'Active') return '#d3f4be';
    else if (statusName === 'Inactive') return '#ff0000';
    else return '#F5ECB8';
  })();

  return (
    <View style={[styles.indicatorStyle, style, { backgroundColor: bgcolor }]}>
      <Text
        style={
          statusName == 'Inactive' ? { color: '#ffffff' } : { color: '#000000' }
        }>
        {statusName}
      </Text>
    </View>
  );
};

export default StatusIndicator;
