import { ScaledSheet } from 'react-native-size-matters';
import { colors, fonts, globalStyles } from '@themes';
import { ListIcon } from '@assets/icons';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },

  listTitle: {
    height: '53@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  listHeadText: {
    marginLeft: '20@s',
    marginTop: '15@vs',
    marginBottom: '16@vs',
    fontWeight: 'bold',
    color: colors.BLACK
  },

  profileHead: {
    height: '56@vs',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.ALICE_BLUE
  },

  nameTitleStyle: {
    marginLeft: '20@s',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22
  },

  statusTitleStyle: {
    marginLeft: '55@s',
    marginRight: '137@s',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22
  },

  floatStyle: {
    alignItems: 'center',
    backgroundColor: colors.PALATINATE_BLUE,
    borderRadius: 100,
    bottom: 32,
    height: '50@s',
    justifyContent: 'center',
    position: 'absolute',
    right: 32,
    width: '50@s'
  },

  floatTextStyle: {
    color: colors.WHITE,
    fontSize: '20@s'
  }
});

export default styles;
