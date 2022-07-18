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
   bottom: 10,
   position: 'absolute',
   right: 10,

  },
});

export default styles;
