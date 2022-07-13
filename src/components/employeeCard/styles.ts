import { color } from 'native-base/lib/typescript/theme/styled-system';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  nameStyle: {
    marginLeft: '20@s',
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12@s'
  },

  cardStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '40@s',
    borderColor: '#ececec',
    borderBottomWidth: 1,
  },

  editIconStyle: {
    paddingRight: '2@s'
  },

  editBoxStyle: {
    position: 'absolute',
    right: '0@s',
    flexDirection: 'column',
    top: '30@s',
    zIndex: 2,
    elevation: 2,
    marginRight: '20@s',
    width: '80@s',
    height: '58@s',
    backgroundColor: '#ffffff'
  },

  editStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8@s'
  },

  pencilIconStyle: {
    marginLeft: '13@s'
  },

  textStyle: {
    marginLeft: '8@s'
  }
});

export default styles;
