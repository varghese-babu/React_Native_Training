import { ScaledSheet } from 'react-native-size-matters';
import { colors, fonts, globalStyles } from '@themes';
import { ListIcon } from '@assets/icons';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
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
    color: '#000000'
  },

  profileHead: {
    height: '56@vs',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaf9ff'
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
    backgroundColor: '#03aeee',
    borderRadius: 100,
    bottom: 10,
    height: '50@s',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    width: '50@s'
  },

  floatTextStyle: {
    color: '#ffffff',
    fontSize: '20@s'
  }
});

export default styles;
