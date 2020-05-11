/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Text, Image, Easing, Dimensions,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Question';
import {Navigation} from 'react-native-navigation';
import {whiteBg} from '../../store/Actions'
import {postResults} from '../../store/firebase';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hasCovid,isAsymp} from './actions'
import {styles} from './styles';
let {width, height} = Dimensions.get('window');
height = height + 70
class MinResults extends Component {
  state = {
    anim1: new Animated.Value(0),
    covid:false,
    points:0,
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  hasCovid = () => {
    const info = this.props.info
    const lostSmell = info.smell === 0 ? false : true;  
    const hasRash = info.foot === 0 ? false : true;  
    const lostTaste = info.taste === 0 ? true : false;  
    const lostBreath = info.smoke === 1 || info.breath === 1 ? true : false;  
    const hasDry = info.dry === 0 ? false : true;  
    const hasPoop = info.poop === 0 ? false : true;  
    const hasHeadache = info.head === 0 ? false : true;  
    const hasFever = info.fever === 0 ? false : true;  
    let points = 0;
    if(hasFever) points+=5;
    if(hasHeadache){
      if(info.age > 4){
        points+=5
      }else{
        points+=2
      }
    };
    if(hasPoop) points+=2;
    if(hasRash) points+=10;
    if(hasDry) points+=5;
    if(lostBreath) points+=5;
    if(lostSmell && lostTaste && points === 0){
      points += 10
      this.props.isAsymp();
    }else if(lostSmell && points === 0){
      points += 10
      this.props.isAsymp();
    }else if(lostSmell && lostTaste){
        points += 10
    }else if(lostSmell){
      points+=5
    }
    if(points >= 8) {
      this.props.hasCovid()
    } 
    if(points === 7  && hasHeadache && hasPoop  || points === 4 && hasHeadache && hasPoop){
      points = 0;
    }
    this.setState({points})
    return  points >= 8 ? true : false
  }
  graphic3 = () => (
    <Animated.View
      style={{
        // position:'absolute',
        opacity: this.state.anim1,
        alignItems:'center',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2 - ((width-140) *0.7)/ 2, width / 2 - ((width-140) *0.7)/ 2],
            }),
          },
          // {
          //   translateX: width/2  - ((width-140) *0.7)/ 2
          // },
          {
            scale: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [0.6, 1],
            }),
          },
        ],
      }}>
        {
          this.state.covid
          ?<Image
          resizeMode="contain"
          style={styles.faceImg}
          source={require('../../assets/page1/frown.png')}
        />
        : <Image
        resizeMode="contain"
        style={styles.faceImg}
        source={require('../../assets/page1/face.png')}
      />
        }
        {
          this.text()
        }
      
    </Animated.View>
  );
  
  text = () => (
    <Animated.View
      style={{
        // position:'absolute',
        opacity: this.state.anim1,
        alignItems:'center',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [-10,-width/2 +( width / 2 - ((width-140) *0.7)/ 2)],
            }),
          },
          
        ],
      }}>
      <Text style={styles.text}>{this.state.covid ? "You are a candidate for COVID - 19" : "You are not a candidate for COVID - 19"}</Text>
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
              outputRange: [30,0],
            }),
          }
          
        ],
      }}
    >
      <SafeAreaView>
        {
          this.state.points != 0
          ?<Button
          title="View Your Details"
          titleStyle={styles.buttonText}
          buttonStyle={{...styles.buttonStyle,backgroundColor:this.state.covid ? "#fff" : "#3ECB99"}}
          onPress={()=>{
            Navigation.showModal({
              stack:{
                children:[
                  {
                    component: {
                      name: 'covid.Results',
                      options:{
                        statusBar:{
                          style:"light"
                        },
                        topBar:{
                          noBorder:true,
                        }
                      }
                    },  
                  }
                ]
              }
                            
            })
          }}
        />
        : null
        }
      
      <View style={{
      }}>
        <Text style={styles.disclaimer}>{this.state.covid ? "Disclaimer: Your positive assesment for COVID - 19 is based off your answers in conjuntion with COVID - 19 related symptoms provided by the CDC and medical professionals and does not serve as a substitute for getting tested for COVID-19. In no way should you take these results at face value. Getting tested by a medical professional is the only way you can be 99.99% sure you are COVID - 19 Positive." : "Disclaimer: Your negative assesment for COVID - 19 is based off your answers in conjuntion with COVID - 19 related symptoms provided by the CDC and medical professionals and does not serve as a substitute for getting tested for COVID-19. In no way should you take these results at face value. Getting tested by a medical professional is the only way you can be 99.99% sure you are COVID - 19 Negative."}</Text>
      </View>
    </SafeAreaView>

    </Animated.View>
  )
  componentDidMount() {

    this.anim1();
    postResults(this.props.info)
    const hasCovid = this.hasCovid();
    if(!hasCovid)
      this.props.whiteBg(true)
    this.setState({covid:hasCovid})
  }
  render() {
    return (
      <View style={{...styles.container,backgroundColor: this.state.covid  ? "#3ECB99" : "#fff"}}>
        {this.graphic3()}
        {
         this.button()
      }
      </View>
    );
  }
}
const mapStateToProps = state => {
  return{
    info:state.answers
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({hasCovid,isAsymp,whiteBg},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MinResults);