/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Easing, Dimensions,SafeAreaView,Image} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Question';
import {connect} from 'react-redux';
import {whiteBg} from '../../store/Actions'
import {bindActionCreators} from 'redux';
import {setSmell,nextQues} from './actions';
import {styles} from './styles';
const {width, height} = Dimensions.get('window');
class Page6 extends Component {
  state = {
    index:null,
    anim1: new Animated.Value(0),
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.elastic(1),
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
      <Header Header="Describe the aroma of your soap or hand sanitizer?" SubHeader="Don't sniff too hard" />
    </Animated.View>
    </SafeAreaView>
  )
  yes = () => (
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
        title="(Pleasant)"
        titleStyle={styles.buttonText}
        icon={
          <View style={{position:'absolute'}}>
            <Image
              resizeMode="contain"
              style={styles.faceImg}
              source={require('../../assets/page6/Asset4.png')}
            />
          </View>
        }
        buttonStyle={[styles.buttonStyle,{backgroundColor:'#fff'}]}
        onPress={()=>this.handleSelect(0)}
      />
    </Animated.View>
  );
  no = () => (
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
        title="(I can't tell)"
        titleStyle={styles.buttonText}
        icon={
          <View style={{position:'absolute'}}>
            <Image
              resizeMode="contain"
              style={styles.faceImg}
              source={require('../../assets/page6/Asset5.png')}
            />
          </View>
        }
        buttonStyle={[styles.buttonStyle,{backgroundColor:'#3ECB99'}]}
        onPress={()=>this.handleSelect(1)}
      />
    </Animated.View>
  );
  soap = () => (
    <Animated.View
      pointerEvents="none"
      style={{
        position:'absolute',
        opacity:this.state.anim1,
      
        transform:[
          {
            translateY:100
          },
          {
            scale:this.state.anim1.interpolate({
              inputRange:[0,1],
              outputRange:[0.5,1]
            })
          },
          {
            translateX:((width-150) *0.8) / 2
          }
        ]
      }}
    >
       <Image
          resizeMode="contain"
          style={styles.soapImg}
          source={require('../../assets/page6/Asset1.png')}
        />
    </Animated.View>
  )
  sud1 = ()=>(
    <Animated.View
    pointerEvents="none"
    style={{
      position:'absolute',
      opacity:this.state.anim1,
      transform:[
        {
          translateY:this.state.anim1.interpolate({
            inputRange:[0,1],
            outputRange:[(height)/2 + 20 ,(height)/2]
          })
        },
        {
          translateX:this.state.anim1.interpolate({
            inputRange:[0,1],
            outputRange:[20,40]
          })
        },
      
        {
          scale:this.state.anim1.interpolate({
            inputRange:[0,1],
            outputRange:[0.5,1]
          })
        }
      ]
    }}
    >
      <Image
          resizeMode="contain"
          style={styles.soapSudImg}
          source={require('../../assets/page6/Asset2.png')}
        />
    </Animated.View>
  )
  sud2 = ()=>(
    <Animated.View
    pointerEvents="none"
    style={{
      position:'absolute',
      justifyContent:'center',
        alignItems:'center',
      opacity:this.state.anim1,
      transform:[
        {
          translateY:this.state.anim1.interpolate({
            inputRange:[0,1],
            outputRange:[(height - 300)/2 ,(height -350)/2]
          })
        },
        {
          translateX:this.state.anim1.interpolate({
            inputRange:[0,1],
            outputRange:[50,width/2 + 70]
          })
        },
      
        {
          scale:this.state.anim1.interpolate({
            inputRange:[0,1],
            outputRange:[0.5,1]
          })
        }
      ]
    }}
    >
      <Image
          resizeMode="contain"
          style={styles.soapSudImg}
          source={require('../../assets/page6/Asset3.png')}
        />
    </Animated.View>
  )
  handleSelect = (index) => {
    //Set smell
    this.props.setSmell(index);
    //Next question
    this.props.nextQues();
  }

  componentDidMount() {
    this.props.whiteBg(false)
    this.anim1();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.soap()}
        {this.sud1()}
        {this.sud2()}
        {this.no()}
        {this.yes()}
        
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({setSmell,nextQues,whiteBg},dispatch)
}
export default connect(null,mapDispatchToProps)(Page6);
