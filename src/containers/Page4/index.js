/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Text, Image, Easing, Dimensions,FlatList,SafeAreaView, TouchableOpacity} from 'react-native';
import {Button,ListItem} from 'react-native-elements';
import Header from '../../components/Question'
import {whiteBg} from '../../store/Actions';
import {styles} from './styles';
import {connect} from 'react-redux';
import {nextQues,setHeight} from './actions';
import { bindActionCreators } from 'redux';
let {width, height} = Dimensions.get('window');
// height = height + 70
class Page4 extends Component {
  state = {
    data:[
      {name:"Shorter than Kevin Hart", img:require('../../assets/page4/Asset1.png')},
      {name:"Kevin Hart and taller", img:require('../../assets/page4/Asset2.png')},
      {name:"Average Height", img:require('../../assets/page4/Asset3.png')},
      {name:"Steph Curry and taller", img:require('../../assets/page4/Asset4.png')},
      {name:"Big Show and taller", img:require('../../assets/page4/Asset5.png')}
    ],
    index:null,
    anim1: new Animated.Value(0),
    _anim1: new Animated.Value(0),
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.elastic(),
      useNativeDriver: true,
    }).start();
  };
  _anim1 = () => {
    Animated.timing(this.state._anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
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
      <Header Header="How tall are you?" SubHeader="(approx.)" />
    </Animated.View>
    </SafeAreaView>
  )
  handleSelect = (n) => {
    //Set height
    this.props.setHeight(n)
    //Next question
    this.props.nextQues()
  }
  choices = () => (
    <FlatList
      scrollEnabled={false}
      data = {this.state.data}
      keyExtractor = {(item,index)=>`list-item-${index}`}
      renderItem={({item,index})=>(
        <ListItem
          onPress={()=>this.handleSelect(index)}
          title={item.name}
          Component={TouchableOpacity}
          titleStyle={[styles.text,{opacity: this.state.index === index ? 1 : 0.5}]}
          
          rightAvatar={
            <View style={{opacity: this.state.index === index ? 1 : 0.5}}>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={(item.img)}
              />
            </View>
          }
        />
      )}
    />
  )
  button = () => {
    this._anim1();
    return(
      <Animated.View
        style={{
          opacity: this.state._anim1,
          transform: [
            {
              translateY: this.state._anim1.interpolate({
                inputRange: [0, 1],
                outputRange: [30,0],
              }),
            },
            {
              translateX: 20
            },
            
          ],
        }}
      >
        <SafeAreaView>
        <Button
          title="Continue"
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          onPress={()=>{
            //Set height
            this.props.setHeight(this.state.index)
            //Next question
            this.props.nextQues()
          }}
        />
        </SafeAreaView>
      </Animated.View>
    )
  }
  componentDidMount() {
    this.props.whiteBg(true)
    this.anim1();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.choices()}
        {/* {
          this.state.index !== null
          ? this.button()
          : null
        } */}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({setHeight,nextQues,whiteBg},dispatch);
}
export default connect(null,mapDispatchToProps)(Page4);
