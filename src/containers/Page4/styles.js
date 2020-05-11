import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
    paddingBottom:20
  },
  text:{
    fontSize:18,
  },
  img:{
    width:width*0.15,
    height:width*0.15,
  },

  faceImg:{
      width:(width-140) *0.7,
      height:(height-150) * 0.7
  },
  backImg:{
      width:(width) *0.8,
      height:(width) * 0.8,
  },
  buttonText:{
    color:'#000'
  },
  buttonStyle:{
    backgroundColor:'#3ECB99',
    width:width-40,
    height:50,
    borderRadius:0
  },
  disclaimer:{
    width:width-40,
    fontSize:10,
    color:'#000'
  }
});
