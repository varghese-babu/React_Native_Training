import { colors } from '@themes';
import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  input: {
    marginHorizontal: '12@s',
    marginVertical: '8@vs',
    borderWidth: '1@s',
    padding: '10@s',
    borderRadius: 10,
    borderColor: colors.GREY_85,
    backgroundColor: colors.GREY_98
  },

  pageStyle: {
    backgroundColor: colors.WHITE
  },

  name: {
    marginLeft: '12@s',
    paddingTop: '15@vs'
  },

  text: {
    marginLeft: '12@s'
  },

  addressStyle: {
    height: '80@vs',
    margin: '12@s',
    borderWidth: '1@s',
    padding: '10@s',
    borderRadius: 10,
    borderColor: colors.GREY_85,
    backgroundColor: colors.GREY_98
  },

  uploadViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  uploadIconStyle: {
    marginLeft: '12@s'
  },

  uploadTextStyle: {
    margin: '10@s',
    color: colors.PALATINATE_BLUE
  },

  bottomButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '40@s',
    marginVertical: '10@s',
    padding: '8@s'
  },

  cancelButtonStyle: {
    backgroundColor: colors.WHITE,
    flex: 1,
    borderRadius: 5,
    alignItems: 'center'
  },

  addButtonStyle: {
    backgroundColor: colors.PALATINATE_BLUE,
    flex: 1,
    borderRadius: 5,
    alignItems: 'center'
  },

  addButtonTextStyle: {
    color: colors.WHITE,
    padding: '10@s'
  },

  cancelButtonTextStyle: {
    color: colors.BLACK,
    padding: '10@s'
  },
  headerStyle: {
    backgroundColor: colors.BLUE
  },

  scrollViewStyle: {
    marginBottom: '50@s'
  }
});

export default styles;
