/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Easing, Dimensions,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Question';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setDry,nextQues} from './actions';
import {styles} from './styles';
const {width, height} = Dimensions.get('window');
class Page14 extends Component {
  state = {
    index:null,
    anim1: new Animated.Value(0),
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.elastic(),
      useNativeDriver: true,
    }).start();
  };
  header = () => (
    <SafeAreaView>
    <Animated.View 
      style={{
        opacity:this.state.anim1,
        height:100,
        transform:[
          {
            translateX: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [-10,0 ],
            }),
          },
        ]
      }}
    >
      <Header Header="Does your cough produce a barking or hoarse sound?"/>
    </Animated.View>
    </SafeAreaView>
  )
  no = () => (
    <Animated.View
      style={{
        position:'absolute',
        zIndex:-1,
        width:width/2,
        height,
        left:0,
        opacity: this.state.anim1,
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 0],
            }),
          },
          
        ],
      }}
    >
      <Button
        title="No"
        titleStyle={styles.buttonText}
        buttonStyle={[styles.buttonStyle,{backgroundColor:'#fff'}]}
        onPress={()=>this.handleSelect(0)}
      />
    </Animated.View>
  );
  yes = () => (
    <Animated.View
      style={{
        position:'absolute',
        width:width/2,
        height,
        right:0,
        zIndex:-1,
        opacity: this.state.anim1,
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          },
          
        ],
      }}
    >
      <Button
        title="Yes"
        titleStyle={styles.buttonText}
        buttonStyle={[styles.buttonStyle,{backgroundColor:'#3ECB99'}]}
        onPress={()=>this.handleSelect(1)}
      />
    </Animated.View>
  );
  
  handleSelect = (index) => {
    //Set Dry
    this.props.setDry(index);
    //Next question
    this.props.nextQues()
  }
  componentDidMount() {
    this.anim1();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.no()}
        {this.yes()}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({nextQues,setDry},dispatch)
}
export default connect(null,mapDispatchToProps)(Page14);
