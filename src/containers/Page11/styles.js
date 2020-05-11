import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
    paddingBottom:20,
  },
  circle:{
    position:'absolute',
    width:(width) *0.5,
    height:(width) * 0.5,
    borderRadius:width,
    backgroundColor:"#3ECB99"
  },
  faceImg:{
      width:(width-140) *0.7,
      height:(height-150) * 0.7,
  },
  backImg:{
      width:(width) *0.5,
      height:(width) * 0.5,

  },
  micImg:{
      width:(width) *0.15,
      height:(height) * 0.15,
  },
  ctaImg:{
      width:(width) *0.22,
      height:(height) * 0.22,
  },
  coughImg:{
      width:(width) *0.5,
      height:(height) * 0.3,
  },
  ctaText:{
    fontSize:18,
    textAlign:'center',
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
  _buttonStyle:{
    backgroundColor:'#3ECB99',
    width:width-80,
    height:50,
    borderRadius:0
  },
  disclaimer:{
    width:width-40,
    fontSize:10,
    color:'#000'
  }
});
