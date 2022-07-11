import { ScaledSheet } from 'react-native-size-matters';

import { fonts, globalStyles } from '@themes';

const styles = ScaledSheet.create({
  addButton: {
    height: '40@vs',
    width: '60%',
    borderWidth: 0.5,
    ...globalStyles.center
  },
  textStyle: {
    ...fonts.small,
    fontWeight: '500'
  }
});

export default styles;
