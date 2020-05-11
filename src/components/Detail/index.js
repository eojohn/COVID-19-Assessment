import React from 'react';
import{View,Text} from 'react-native';
import {styles} from './styles';

const Detail = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.question}>{props.question}</Text>
            <Text style={styles.answer}>{props.answer}</Text>
        </View>
    )
}
export default Detail