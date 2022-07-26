import { ScaledSheet } from 'react-native-size-matters';

import { colors } from '@themes';

const styles = ScaledSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: colors.WHITE,
    width: '80%',
    paddingVertical: '20@vs'
  },

  modalTextStyle: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.BLACK
  }
});

export default styles;
