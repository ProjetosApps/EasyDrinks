import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  bodyWhite: {
    flex: 1, 
    paddingTop: 15, 
    marginTop: -15, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    backgroundColor: '#FeFeFe',
    height: Dimensions.get('window').height-40, 
  },

  headerBody: {
    flexDirection: "row",
    flexWrap: 'wrap', 
    marginTop: 15, 
    marginBottom: 10, 
    justifyContent: 'space-between', 
    marginHorizontal: 10,
  },

  labelText: {
    height: 30, 
    borderRadius: 15,  
    alignItems: 'center', 
    paddingHorizontal: 10,
    justifyContent: 'center', 
    backgroundColor:  "#FFF6ee" ,
  },
  containerInfos: {
    elevation: 1, 
    borderRadius: 5, 
    paddingVertical: 10,  
    marginHorizontal: 15,
    backgroundColor: '#FFF', 
  },

  headerInfos: {
    marginLeft: 0, 
    marginBottom: 10,
    flexDirection: "row", 
  },

  tick: {
    width: 5, 
    height: 30, 
    backgroundColor: colors.primary, 
  },

  bodyInfos: {
    marginLeft: 5,
    flexDirection: 'row', 
    paddingHorizontal: 20,
  },

  textLabelInfos: {
    fontSize: fonts.default,
    fontFamily: fonts.semi_bold,
  },

  containerLabelInfos: {
    height: 30, 
    marginLeft: 20, 
    justifyContent: 'center', 
  },

  textInfos: {
    color: '#888', 
    fontSize: fonts.regular, 
    fontFamily: fonts.semi_bold, 
  }
});

export default styles;
