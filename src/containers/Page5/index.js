/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Text, Keyboard, Easing, Dimensions,SafeAreaView,TouchableOpacity,Platform,KeyboardAvoidingView} from 'react-native';
import {Button,Input} from 'react-native-elements';
import Header from '../../components/Question';
import {connect} from 'react-redux';
import {whiteBg} from '../../store/Actions'
import {bindActionCreators} from 'redux';
import {setWeight,nextQues,setUnit} from './actions';
import {styles} from './styles';
let {width, height} = Dimensions.get('window');
// height = height + 70
class Page5 extends Component {
  state = {
    weight:0,
    index:false,
    t:'',
    anim1: new Animated.Value(0),
    keyboardShow:false,
    keyboardHeight:200,
    animBtn: new Animated.Value(0)
  };
  slideUpBtn = (h)=>{
    Animated.spring(this.state.animBtn,{
        toValue:(-h - 20),
        ease:Easing.easeInOut,
        useNativeDriver:true
    }).start()
}
anim1 = () => {
  Animated.timing(this.state.anim1, {
    toValue: 1,
    duration: 500,
    easing: Easing.elastic(),
    useNativeDriver: true,
  }).start();
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
      <Header Header="Enter weight" />
      </SafeAreaView>
    </Animated.View>
  )
  input = () => (
    <Input
      ref={t=>this.text=t}
      placeholder={!this.state.index ? "100 lbs" : "45 kg"}
      value={this.state.t}
      inputStyle={{fontSize:32}}
      keyboardType="numeric"
      onChangeText={(t)=>this.setState({t})}
      containerStyle={{...styles.searchContStyle,marginBottom: width / 2}}
      inputContainerStyle={styles.inputContStyle}
    />
  )
  handleSelect = (index) => {
    this.setState({index})
  }
  button = () => (
    <Animated.View
        style={{
          opacity: this.state.anim1,
          alignItems:'center',
          transform: [
            {
              translateY: this.state.animBtn
            },
           
            
          ],
        }}
      >
        <SafeAreaView>
      <TouchableOpacity onPress={()=>this.handleSelect(!this.state.index)}>
        <View style={{alignItems:"center",padding:10}}>
            <Text>{!this.state.index ? "Use Kilograms" : "Use Pounds"}</Text>
        </View>
      </TouchableOpacity>
      <Button
        title="Continue"
        disabled={this.state.t === ""}
        titleStyle={styles.buttonText}
        buttonStyle={styles.buttonStyle}
        onPress={()=>{
          //Set weight
          this.props.setWeight(this.state.weight);
          //Set metric unit
          this.props.setUnit(this.state.index);
          //Next question
          this.props.nextQues()
        }}
      />
      </SafeAreaView>
    </Animated.View>
  )
  keyboardDidShow = (event) => {
    //   console.log("keyboard show",event)
        this.slideUpBtn(event.endCoordinates.height);
        this.setState({keyboardShow:true,keyboardHeight:event.endCoordinates.height}) //<<You got the keyboard height 

  }

  keyboardDidHide = (event) => {
    // console.log("keyboard hide",event)
    this.slideUpBtn(0);
    this.setState({keyboardShow:false,keyboardHeight:0})
}
  componentDidMount() {
    this.props.whiteBg(true)
    this.text.focus()
    this.anim1();
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',(event)=>this.keyboardDidShow(event) );
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',(event)=>this.keyboardDidHide(event) );
  }
  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.input()}
        {
          this.state.index
        }
        {this.button()}
      </View>
    );
  }
}
const mapDispatchToProps =  dispatch => {
  return bindActionCreators({setWeight,nextQues,setUnit,whiteBg},dispatch);
}
export default connect(null,mapDispatchToProps)(Page5);
