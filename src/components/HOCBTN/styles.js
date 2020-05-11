import {StyleSheet,Dimensions} from 'react-native';
const {width} = Dimensions.get('window')
export const styles = StyleSheet.create({
    container:{
        width:100,
        right:-20,
        backgroundColor:'transparent',
        height:45,
        zIndex:-2,
    },
    block:{
        zIndex:-2,
        position:'absolute',
        right:0,
        backgroundColor:'#3ECB99',
        width:100,
        height:30,
    },
    icon:{
        transform:[{rotate:'30deg'}],
        position:'absolute',
        right: 36,
        top:12.5
    }
})