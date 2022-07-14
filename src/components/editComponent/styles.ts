import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  editBoxStyle: {
    flexDirection: 'column',
    top: '16@s',
    width: '80@s',
    backgroundColor: '#ffffff'
  },

  editStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '2@s',
    paddingBottom: '6@s'
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
  },
  editIconStyle: {
    paddingRight: '2@s'
  }
});

export default styles;
