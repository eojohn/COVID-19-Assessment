import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
    paddingBottom:20
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
  },
  _buttonText:{
    color:'#000',
  },
  _buttonStyle:{
    width:width-40,
    height:50,
    borderRadius:0,
    backgroundColor:'#fff',
        shadowColor: "#0057ff",
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: -2 }
  }
});
