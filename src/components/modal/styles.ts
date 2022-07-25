import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#ffffff',
    width: '80%',
    paddingVertical:'20@vs'
  },

  modalTextStyle: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#000000'
  }
});

export default styles;
