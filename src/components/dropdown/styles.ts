import { ScaledSize } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  statusView: {
    position: 'absolute',
    top: 23,
    zIndex: 3,
    borderColor: '#ffffff',
    elevation: 2
  },

  buttonTouch: {
    justifyContent: 'space-between',
    marginRight: '16.36@s'
  },

  statusText: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
    borderWidth: 1,
    paddingHorizontal: '11@s',
    paddingVertical: '6@s',
    alignItems: 'center'
  },

  marginStyle: {
    margin: 2
  }
});

export default styles;
