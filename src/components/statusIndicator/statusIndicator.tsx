import React, { FunctionComponent, useMemo } from 'react';
import { View, Text } from 'native-base';

import { colors } from '@themes';

import { StatusIndicatorParams } from './types';
import styles from './styles';

const StatusIndicator: FunctionComponent<StatusIndicatorParams> = (
  props: StatusIndicatorParams
) => {
  const { statusName, style } = props;

  const bgcolor = useMemo(() => {
    if (statusName === 'Active') return colors.TEA_GREEN;
    else if (statusName === 'Inactive') return colors.RED;
    else return colors.BLOND;
  }, [statusName]);

  return (
    <View style={[styles.indicatorStyle, style, { backgroundColor: bgcolor }]}>
      <Text
        style={
          statusName == 'Inactive'
            ? styles.statusTextInactiveStyle
            : styles.statusTextActiveAndProbationStyle
        }>
        {statusName}
      </Text>
    </View>
  );
};

export default StatusIndicator;
