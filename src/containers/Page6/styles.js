import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonText:{
    color:'#000',
    fontSize:20,
    marginTop:width/2 + 220
  },
  buttonStyle:{
    flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'#3ECB99',
    width:width/2,
    height,
    borderRadius:0
  },
  faceImg:{
    marginTop:width/2 + 80,
    width:(width-140) *0.35,
    height:(height-150) * 0.35
},
  soapImg:{
    width:(width-150) *0.8,
    height:(height-120) * 0.8
},
  soapSudImg:{
    width:(width-150) *0.18,
    height:(height-120) * 0.18
},
});
