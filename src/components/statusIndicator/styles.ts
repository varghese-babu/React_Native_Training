import { colors } from '@themes';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  indicatorStyle: {
    borderWidth: 0,
    borderRadius: 25,
    paddingHorizontal: '6@s',
    paddingVertical: '2@s',
    alignItems: 'center',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 400
  },

  statusTextInactiveStyle: {
    color: colors.WHITE
  },

  statusTextActiveAndProbationStyle: {
    color: colors.BLACK
  }
});

export default styles;
