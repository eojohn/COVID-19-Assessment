import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
  },
  list:{
    position:'absolute',
    right:20,
    top:height/4
  },
  text:{
    fontSize:18,
  },
  searchContStyle:{
    backgroundColor:'transparent',
    borderWidth:0,
    borderTopWidth:0,
    borderBottomWidth:0,
    paddingBottom:0,
    alignItems:'center',
    marginTop:150,
},
inputContStyle:{
    backgroundColor:'transparent',
    borderBottomWidth:0,
    height:60,
    width:width - 40,
    alignItems:'center'
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
