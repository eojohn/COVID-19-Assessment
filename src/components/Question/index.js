import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
/**
 *
 * @param {*} props
 * Top "", Header "", SubHeader ""
 */
const Question = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={require('../../assets/dots.png')}
        />
      </View>
      {props.Top ? <Text style={styles.top}>{props.Top}</Text> : null}
      <Text
        style={
          props.Large ? {fontSize: 34, fontWeight: 'bold'} : styles.header
        }>
        {props.Header}
      </Text>
      {props.SubHeader ? (
        <Text style={styles.subHeader}>{props.SubHeader}</Text>
      ) : null}
    </View>
  );
};
export default Question;
