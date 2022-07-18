import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';
import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  input: {
    marginHorizontal: '12@s',
    marginVertical: '8@vs',
    borderWidth: '1@s',
    padding: '10@s',
    borderRadius: 10,
    borderColor: '#d9d9d9',
    backgroundColor: '#fafafa'
  },

  pageStyle: {
    backgroundColor: '#ffffff'
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
    borderColor: '#d9d9d9',
    backgroundColor: '#fafafa'
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
    color: '#03aeee'
  },

  bottomButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '40@s',
    marginVertical: '10@s',
    padding: '8@s'
  },

  cancelButtonStyle: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center'
  },

  addButtonStyle: {
    backgroundColor: '#03aeee',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center'
  },

  addButtonTextStyle: {
    color: '#ffffff',
    padding: '10@s'
  },

  cancelButtonTextStyle: {
    color: '#000000',
    padding: '10@s'
  },
  headerStyle: {
    backgroundColor: '#0000ff'
  },

  scrollViewStyle: {
    marginBottom: '50@s'
  }
});

export default styles;
