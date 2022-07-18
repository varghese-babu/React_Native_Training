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
    marginRight: '16.36@s',
    position: 'relative'
  },

  statusText: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    paddingHorizontal: '11@s',
    paddingVertical: '6@s',
    alignItems: 'center'
  },

  marginStyle: {
    margin: 2
  },

  statusDropDownStyle: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '12@s',
    marginVertical: '8@vs',
    borderWidth: '1@s',
    padding: '10@s',
    borderRadius: 10,
    borderColor: '#d9d9d9',
    backgroundColor: '#fafafa'
  },

  statusAndRole: {
    position: 'absolute',
    top: 55,
    zIndex: 3,
    borderColor: '#ffffff',
    elevation: 2,
    marginHorizontal: '12@s',
    width: '94%'
  },

  viewStyle: {}
});

export default styles;
