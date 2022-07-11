import { ScaledSheet } from 'react-native-size-matters';
import { colors, fonts, globalStyles } from '@themes';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  title: {
    ...fonts.medium,
    fontWeight: 'bold',
    paddingTop: '15@vs'
  },
  body: {
    ...fonts.small,
    paddingTop: '15@vs'
  },
  titleWrapper: {
    marginTop: '50@vs',
    paddingHorizontal: '20@s'
  },
  bodyWrapper: {
    height: '60%',
    ...globalStyles.center
  },
  heading: {
    color: colors.TRANSPARENT_BLACK_1
  },
  spinner: {
    flex: 1,
    ...globalStyles.center
  }
});

export default styles;
