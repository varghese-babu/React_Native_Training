import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  indicatorStyle: {},

  rowStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    padding: '5@s'
  },

  editIconStyle: {
    alignItems: 'center',
    bottom: 32,
    position: 'absolute',
    right: 32
  },

  innerStyle: {
    flex: 1,
  },

  detailsViewStyle: {
    flex: 1
  },

  textStyle: {

   marginVertical: 5,
  }
});

export default styles;
