import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  editBoxStyle: {
    position: 'absolute',
    right: '0@s',
    flexDirection: 'column',
    top: '30@s',
    zIndex: 2,
    elevation: 2,
    marginRight: '20@s',
    width: '80@s',
    backgroundColor: '#ffffff',

  },

  editStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '2@s',
    paddingBottom: '6@s',
  },

  deleteStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '2@s',
    paddingBottom: '6@s',
    paddingVertical: '4@s'
  },

  pencilIconStyle: {
    marginLeft: '13@s'
  },

  textStyle: {
    marginLeft: '8@s'
  }
});

export default styles;
