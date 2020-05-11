import React from 'react';
import {View, Text,Image, TouchableWithoutFeedback} from 'react-native'
import {styles} from './styles';
/**
 * Label "", onPress (), half (bool)
 */
const Symptom = props => {
    return(
        <TouchableWithoutFeedback onPress={()=>props.onPress()}>
        <View style={styles.container}>
            <Text style={styles.label}>{props.Label}</Text>
            <View style={{alignItems:'flex-start'}}>
            {
                props.half
                ? <Image resizeMode="contain" style={styles.halfImg} source={require('../../assets/half.png')}/>
                :   <Image resizeMode="contain" style={styles.img} source={require('../../assets/full.png')}/>
            }
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Symptom