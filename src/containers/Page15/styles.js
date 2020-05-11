import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  buttonText:{
    color:'#000',
    fontSize:20,
    fontWeight:'bold'
  },
  buttonStyle:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    width:width/2,
    height,
    borderRadius:0
  }
});
