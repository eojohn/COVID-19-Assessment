import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get("window")
export const styles = StyleSheet.create({
    container:{
        width,
        alignItems:'flex-start',
        marginVertical:5
    },
    label:{
        fontSize:18,
        paddingLeft:25,
    },
    img:{
        width:200,
        alignItems:'flex-start',

        height:30
    },
    halfImg:{
        width:width-285,
        alignItems:'flex-start',

        height:30
    }
})