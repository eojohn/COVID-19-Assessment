/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Text, Image, Easing, Dimensions,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Question';
import {connect} from 'react-redux';
import {testBegan} from '../../store/Actions';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont()
import {bindActionCreators} from 'redux';
import {startTest} from './action';
import {styles} from './styles';
import { Navigation } from 'react-native-navigation';
import { iconsMap } from '../../store/AppIcons';
let {width, height} = Dimensions.get('window');
// height = height + 70
class Page1 extends Component {
  state = {
    anim1: new Animated.Value(0),
    flipAnim: new Animated.Value(0),
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  flipAnim = () => {
    Animated.sequence([
      
        Animated.timing(this.state.flipAnim, {
          toValue:3,
          duration: 200,
          // easing: Easing.easeInOut,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.flipAnim, {
          toValue:0,
          duration: 200,
          // easing: Easing.easeInOut,
          useNativeDriver: true,
        }),
      
      
    ]).start()
  };
  header = () => (
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
          <SafeAreaView>

      <Header Top="COVID-19" Header="Self Assessment" Large />
      </SafeAreaView>
    </Animated.View>
  )
  graphic1 = () => (
    <Animated.View
      style={{
        zIndex:2,
        position:'absolute',
        opacity: this.state.anim1,
        padding: 20,
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width / 2  ],
            }),
          },
          {
            rotateX: this.state.flipAnim,
          },
        ],
      }}>
      <Image
        resizeMode="contain"
        style={styles.virusImg}
        source={require('../../assets/page1/virus1.png')}
      />
    </Animated.View>
  );
  graphic2 = () => (
    <Animated.View
      style={{
        opacity: this.state.anim1,
        position:'absolute',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2 +60, width / 2 + 80],
            }),
          },
          {
            translateX: width - (width*0.25 +20),
          },
        ],
      }}>
      <Image
        resizeMode="contain"
        style={styles.virusImg}
        source={require('../../assets/page1/virus2.png')}
      />
    </Animated.View>
  );
  graphic3 = () => (
    <Animated.View
      style={{
        opacity: this.state.anim1,
        position:'absolute',
        zIndex:3,
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
          },
          {
            translateX: width/2  - ((width-140) *0.7)/ 2
          },
          {
            scale: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [0.6, 1],
            }),
          },
        ],
      }}>
      <Image
        resizeMode="contain"
        style={styles.faceImg}
        source={require('../../assets/page1/face.png')}
      />
    </Animated.View>
  );
  graphic4 = () => (
    <Animated.View
      style={{
        zIndex:-1,
        position:'absolute',
        opacity: this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [height / 2 - ((height) * 0.8) / 2, height / 2 - ((height) * 0.8) / 2],
            }),
          },
          // {
          //   translateX: width/2  -((width) *0.8)/ 2
          // },
          {
            translateX: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [-60,-10 ],
            }),
          },
          
        ],
      }}>
      <Image
        resizeMode="contain"
        style={styles.backImg}
        source={require('../../assets/page1/back.png')}
      />
    </Animated.View>
  );
  graphic5 = () => (
    <Animated.View
      style={{
        opacity: this.state.anim1,
        position:'absolute',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width/2 +  ((width-140) *0.7) *2  + 40 , width/2 +  ((width-140) *0.7) *2 - 30  ],
            }),
          },
          {

            scale: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1],
            }),
        
          },
          {
            translateX: width/2,
          },
        ],
      }}>
      <Image
        resizeMode="contain"
        style={styles.virusImg}
        source={require('../../assets/page1/virus3.png')}
      />
    </Animated.View>
  );
  button = () => (
    <Animated.View
      style={{
        opacity: this.state.anim1,
        alignItems:'center',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0],
            }),
          }
          
        ],
      }}
    >
      <SafeAreaView>
      <Button
        title="Get Started"
        titleStyle={styles.buttonText}
        buttonStyle={styles.buttonStyle}
        onPress={()=>{
          //Start Test
          this.props.testBegan(true)
          this.props.startTest();
        }}
      />
      <View style={{
      }}>
        <Text style={styles.disclaimer}>Disclaimer: This app is designed to help you make decisions about seeking appropriate medical care if you are concerned about  COVID - 19. This app is not intended to provide a diagnosis or provide treatment for COVID - 19</Text>
      </View>
    </SafeAreaView>

    </Animated.View>
  )
  componentDidMount() {
    this.anim1();
    this.flipAnim();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.graphic1()}
        {this.graphic2()}
        {this.graphic3()}
        {this.graphic4()}
        {this.graphic5()}
        {this.button()}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({startTest,testBegan},dispatch);
}
export default connect(null,mapDispatchToProps)(Page1);