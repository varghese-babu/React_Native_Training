import { ScaledSheet } from 'react-native-size-matters';
import { colors, fonts, globalStyles } from '@themes';

const styles=ScaledSheet.create ({

header: {
    backgroundColor: '#f4f4f5',
    width: '375@s',
    left: '0@s',
    right: '0@s',
    justifyContent: 'center',
    paddingVertical: '15@s',
  },

  hIcon: {
    marginStart: '19.75@s'
  },

  sample: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  kvLogo: {

    marginLeft: '11.75@s',
  },

});

export default styles;