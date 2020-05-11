/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Text, Image, Easing, Dimensions,SafeAreaView,ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Question';
import Symptom from '../../components/Symptom';
import {iconsMap} from '../../store/AppIcons';
import {bindActionCreators} from 'redux';
import {setSymptom} from './actions';
import {connect} from 'react-redux';
import {styles} from './styles';
import { Navigation } from 'react-native-navigation';
let {width, height} = Dimensions.get('window');
height = height + 70
class Results extends Component {
  state = {
    anim1: new Animated.Value(0),
    covid:this.props.info.hasCovid,
    asymp:this.props.info.asymp
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
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

      <Header  Header="Your Symptoms"  />
      </SafeAreaView>
    </Animated.View>
  )
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
  nextScreen = (s) => {
    this.props.setSymptom(s);
    Navigation.push(this.props.componentId,{
      component:{
        name:"covid.Details",
        options:{
          topBar:{
            backButton:{
              icon:iconsMap["arrow-left"]
            }
          }
        }
      }
    })
  }
  symptoms = () => (
    <View>
        {
          this.props.info.smell
          ? <Symptom Label="Lossed your sense of smell" onPress={()=>this.nextScreen("sos")} />
          : null
        }
        {
          this.props.info.breath || this.props.info.smoke
          ? <Symptom Label="Shortness of breath" onPress={()=>this.nextScreen("sob")} />
          : null
        }
        {
          this.props.info.dry
          ? <Symptom Label="Dry Cough" onPress={()=>this.nextScreen("dry")} />
          : null
        }
        {
          this.props.info.foot
          ? <Symptom Label="COVID Toes" onPress={()=>this.nextScreen("toes")} />
          : null
        }
        {
          this.props.info.fever
          ? <Symptom Label="Fever" onPress={()=>this.nextScreen("fever")} />
          : null
        }
        {
          this.props.info.head
          ? <Symptom Label="Headache" onPress={()=>this.nextScreen("head")}  />
          : null
        }
        {
          this.props.info.poop
          ? <Symptom Label="Diarrhea" onPress={()=>this.nextScreen("poop")} />
          : null
        }
    </View>
  )
  text = () => {

    const hasCovid = this.state.covid;
    const asymp = this.state.asymp;
    let text = `Based on your results, you are a prime candidate for a COVID - 19 test. Please speak to a medical professional at your earliest convenience.`
    if(!hasCovid){
      const mainText = "Based on your results, you are not a prime candidate for a COVID - 19 test.";
      const dry = this.props.info.dry === 1 ? true : false;
      let breath = this.props.info.breath === 1 ? true : false;
      let smoke = this.props.info.smoke === 1 ? true : false;
      const fever = this.props.info.fever === 1 ? true : false;
      const head = this.props.info.head === 1 ? true : false;
      const poop = this.props.info.poop === 1 ? true : false;
      let asthma = this.props.info.asthma;
      asthma ? breath = false : asthma = false
      if(smoke){
        breath = false
        asthma = false
      }else{
        smoke = false;
      }
      const secSent = ` However, you indicated ${dry ? "you have a dry cough" : ""}${breath ? "you're having trouble breathing" : ""}${asthma ? "you have asthma" : ""}${smoke?"you're a smoker/vaper, both of which can inhibit your lungs' performance" : ""}${fever?"you have a fever":""}${head?" as well as a headache" : ""}${poop?" as well as diarrhea":""}.`
      let subText = ` Speak to a medical professional (over the phone if possible) about ${dry?"remedies / medication to suppress your cough":""}${breath?"possible treatments / activities that can be done to improve your breathing" : ""}${asthma?"whether or not it is an asthma flare or something more serious as you have no fever" : ""}${fever ? "remedies / medication to bring your body temperature down to the appropriate levels (below 98.6°F  / 37°C)" : ""}`;
      subText += `${head ? " and ease your headache" : ""}${poop ? " and subside your diarrhea" : ""}.`
      if(head && poop){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to ease your headache and subside your diarrhea.`
      }
      if(head && !poop & !dry && !smoke && !breath && !fever && !asthma){
        subText =  ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to ease your headache.`
      }
      if(poop && !head & !dry && !smoke && !breath && !fever && !asthma){
        subText =  ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to subside your diarrhea.`
      }
      if(head && smoke){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to ease your headache. If your headache is persistant after following the advice of a medical professional or if you develop issues breathing, a COVID - 19 test might be worth looking into.`
      }
      if(poop && smoke){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to subside your diarrhea. If your diarrhea is persistant after following the advice of a medical professional or if you develop issues breathing, a COVID - 19 test might be worth looking into.`
      }
      let thirdSent = ` If ${dry?"your dry cough" : ""}${fever?"your fever":""}${breath?"you're still having issues breathing" : ""}`
      thirdSent += `${head && dry || head && fever?" and headache" : ""}${head && breath ?" and your headache is persistant" : ""}${poop && dry || poop && fever?" and diarrhea" : ""}${poop && breath ?" and your diarrhea is persistant" : ""}`;
      if(dry && !fever && !breath && !poop && !head){
        thirdSent += " is persistant"
      }
      if(fever && !dry && !breath && !poop && !head){
        thirdSent += " is persistant"
      }
      thirdSent += " after following the advice of a medical professional, a COVID - 19 test might be worth looking into."
      if(head && smoke){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to ease your headache. If your headache is persistant after following the advice of a medical professional or if you develop issues breathing, a COVID - 19 test might be worth looking into.`
        thirdSent = ""
      }
      if(poop && smoke){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to subside your diarrhea. If your diarrhea is persistant after following the advice of a medical professional or if you develop issues breathing, a COVID - 19 test might be worth looking into.`
        thirdSent = ""
      }
      if(head && asthma){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to ease your headache. If your headache is persistant after following the advice of a medical professional or if your asthma worsens, a COVID - 19 test might be worth looking into.`
        thirdSent = ""
      }
      if(poop && asthma){
        subText = ` Speak to a medical professional (over the phone if possible) about possible remedies / medication to subside your diarrhea. If your diarrhea is persistant after following the advice of a medical professional or if your asthma worsens, a COVID - 19 test might be worth looking into.`
        thirdSent = ""
      }
      if(smoke && !head & !dry && !poop && !breath && !fever){
        subText =  ` If you develop issues breathing, a COVID - 19 test might be worth looking into.`
        thirdSent = ""
      }
      if(asthma && !head & !dry && !poop && !breath && !fever && !smoke){
        thirdSent =  ` If after following the advice of a medical professional your asthma worsens, a COVID - 19 test might be worth looking into.`
      }
      text = mainText + secSent + subText + thirdSent
    }
    if(this.props.info.asymp){
      text = `Based on your results, you might benefit from a COVID - 19 test. Your symptoms are congruent with those of an asymptomatic infected person. Please speak to a medical professional at your earliest convenience.`
    }
    return(
    <Animated.View
      style={{
        opacity: this.state.anim1,
        alignItems:'center',
        
      }}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>)
  };

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
      <Button
        title="Nearby Testing Sites"
        titleStyle={styles.buttonText}
        buttonStyle={{...styles.buttonStyle}}
        onPress={()=>this.props.startTest()}
      />
    </SafeAreaView>

    </Animated.View>
  )
  componentDidMount() {
    this.anim1();
  }
  render() {
    return (
      <View style={styles.container}>
              <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
<>
        {this.header()}
        {this.symptoms()}
        {this.text()}
       
        </>
        </ScrollView>
        {/* {this.button()} */}

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
  return bindActionCreators({setSymptom},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Results);