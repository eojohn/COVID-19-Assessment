import React from 'react';
import {View,Text} from 'react-native';

const FootNote = props => {
    return(
        <View style={{padding:20,paddingBottom:10}}>
            <Text style={{fontSize:10}}>{props.label}</Text>
        </View>
    )
}
export default FootNote;