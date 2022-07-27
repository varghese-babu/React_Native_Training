import { ScaledSheet } from 'react-native-size-matters';
import { colors, fonts, globalStyles } from '@themes';

const styles = ScaledSheet.create({
  header: {
    backgroundColor: colors.GHOST_WHITE,
    width: '375@s',
    left: '0@s',
    right: '0@s',
    justifyContent: 'center',
    paddingVertical: '15@s'
  },

  hIcon: {
    marginStart: '19.75@s'
  },

  sample: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  kvLogo: {
    marginLeft: '11.75@s'
  },

  textStyle: {
    marginLeft: '12@s',
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',

  },
});

export default styles;
