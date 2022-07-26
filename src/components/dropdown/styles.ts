import { colors } from '@themes';
import { ScaledSize } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  statusView: {
    borderColor: colors.WHITE,
    elevation: 2,
    position: 'absolute',
    top: 23,
    zIndex: 3
  },

  buttonTouch: {
    justifyContent: 'space-between',
    marginRight: '16.36@s',
    position: 'relative'
  },

  statusText: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderColor: colors.GREY_88,
    borderWidth: 1,
    paddingHorizontal: '11@s',
    paddingVertical: '6@s'
  },

  marginStyle: {
    margin: 2
  },

  statusDropDownStyle: {
    alignItems: 'center',
    backgroundColor: colors.GREY_98,
    borderColor: colors.GREY_85,
    borderRadius: 10,
    borderWidth: '1@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '12@s',
    marginVertical: '8@vs',
    padding: '10@s',
    width: '98%'
  },

  statusAndRole: {
    borderColor: colors.WHITE,
    elevation: 2,
    marginHorizontal: '12@s',
    position: 'absolute',
    top: 55,
    width: '94%',
    zIndex: 3
  }
});

export default styles;
