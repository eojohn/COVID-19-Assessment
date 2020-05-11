/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent, Component} from 'react';
import {View, Animated, Text, Image, Easing, Dimensions, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback,Alert,Linking,Platform} from 'react-native';
import {Button} from 'react-native-elements';
import {check,PERMISSIONS,RESULTS} from 'react-native-permissions';
import {uploadFile} from '../../store/Functions';
import Header from '../../components/Question';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont()
import {connect} from 'react-redux';
import {whiteBg,showSkip} from '../../store/Actions'
import {bindActionCreators} from 'redux';
import {nextQues,setRecord} from './actions';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import {styles} from './styles';
let {width, height} = Dimensions.get('window');
height = height + 70
class Page11 extends Component {
  constructor(props){
    super(props);
    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.state = {
      anim1: new Animated.Value(0),
      anim2: new Animated.Value(0),
      anim3: new Animated.Value(0.6),
      anim4: new Animated.Value(0.6),
      showModal:false,
      startRecord:false,
      stopRecord:false,
      startPlay:false,
      stopPlay:false,
      recordSecs:0,
      recordTime:0,
      restart:false,
      record:"",
      blocked:false
    };
  }
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  anim2 = () => {
    Animated.spring(this.state.anim2, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  end = () => {
  
      Animated.timing(this.state.anim4,{
        toValue:0.6,
        duration:500,
        easing:Easing.ease,
        useNativeDriver:true
      }).start()
   
  }
  zoomOut = () => {
    if(!this.state.startRecord && !this.state.startPlay && !this.state.stopPlay && !this.state.stopRecord ||  this.state.startPlay  && !this.state.stopPlay && !this.state.startRecord){
      return 0.6
    }else{

      Animated.sequence([
        Animated.timing(this.state.anim4,{
          toValue:0.6,
          duration:500,
          easing:Easing.ease,
          useNativeDriver:true
        }),
        Animated.timing(this.state.anim4,{
          toValue:1.5,
          duration:500,
          easing:Easing.elastic(),
          useNativeDriver:true
        }),
        Animated.timing(this.state.anim4,{
          toValue:0.6,
          duration:500,
          easing:Easing.easeInOut,
          useNativeDriver:true
        }),
      ]).start(()=>  this.zoomIn() )
    }
    
  }
  zoomIn = () => {
    if(!this.state.startRecord && !this.state.startPlay && !this.state.stopPlay && !this.state.stopRecord ||  this.state.startPlay  && !this.state.stopPlay && !this.state.startRecord){
      return 0.6
    }
    Animated.sequence([
      Animated.timing(this.state.anim3,{
        toValue:0.6,
        duration:500,
        easing:Easing.ease,
        useNativeDriver:true
      }),
      Animated.timing(this.state.anim3,{
        toValue:1.2,
        duration:500,
        easing:Easing.elastic(),
        useNativeDriver:true
      }),
      Animated.timing(this.state.anim3,{
        toValue:0.6,
        duration:500,
        easing:Easing.easeInOut,
        useNativeDriver:true
      }),
    ]).start(()=>  this.zoomOut() )
  }
  recording = () =>{
    this.zoomOut();
    return(
      <Animated.View
        style={{...styles.circle,
          opacity:0.2,
          justifyContent:'center',
          alignItems:'center',    
                transform: [
            // {
            //   translateY:((width) * 0.5)/2
            // },
            {
              translateX: ((width) *0.5) / 2
            },
            {
              scale:this.state.anim4 
            }
          ],
        }}
      >
        
      </Animated.View>
    )
  }
  recording2 = () =>{
    return(
      <Animated.View
        style={{...styles.circle,
          opacity:0.3 ,
          justifyContent:'center',
          alignItems:'center',    
                transform: [
            // {
            //   translateY:((width) * 0.5)/2
            // },
            {
              translateX: ((width) *0.5) / 2
            },
            {
              scale:this.state.anim3
              
            }
          ],
        }}
      >
        
      </Animated.View>
    )
  }
  
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
      <Header Header="Record your cough" SubHeader="Your cough sample is used to train a Machine Learning Model to detect COVID-19 patients. Your participation in this research is optional. " />
    </Animated.View>
    </SafeAreaView>
  )
  uploadAudio = async (file) => {
    return await uploadFile(file)
    
  }
 onStartRecord = async () => {
   if(this.state.blocked){
     return this.requestPermission()
   }else{
     this.onStopPlay()
    this.setState({
      startRecord:true,
        stopRecord:false,
        startPlay:false,
        stopPlay:false,
    });
   }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    const path = Platform.select({
      ios: 'covidCough.m4a',
      android: 'sdcard/covidCough.mp4',
    });
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    
    console.log('audioSet', audioSet);
    const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet).catch(e=> {this.audioRecorderPlayer.stopRecorder(); return this.audioRecorderPlayer.startRecorder(path, audioSet) });
    let r = {};
    this.audioRecorderPlayer.addRecordBackListener((e) => {
 
       if(e.current_position >=6000 && !this.state.stopPlay && !this.state.startPlay ){
        this.setState({
          startRecord:true,
            stopRecord:false,
            startPlay:false,
            stopPlay:false,
            record:uri,
            restart:false,
          recordSecs: e.current_position,
          recordTime: Math.floor(e.current_position),
        });
       return this.onStopRecord()

       
     }else{
       r = e
     }
   
    });
    this.setState({
      startRecord:true,
        stopRecord:false,
        startPlay:false,
        stopPlay:false,
        record:uri,
        restart:false,
      recordSecs: r.current_position,
      recordTime: Math.floor(r.current_position),
    });
    };
  
  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
      startRecord:false,
      startPlay:true,
    });
    console.log(result);
  };
  
  onStartPlay = async () => {
    this.setState({
      stopPlay:true,
      startPlay:false,
    });
    console.log('onStartPlay');
    const path = Platform.select({
      ios: 'covidCough.m4a',
      android: 'sdcard/covidCough.mp4',
    });
    const msg = await this.audioRecorderPlayer.startPlayer(path);
    this.audioRecorderPlayer.setVolume(1.0);
    console.log(msg);
    let r = {}
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.current_position === e.duration) {
        console.log('finished');
        this.audioRecorderPlayer.stopPlayer();
        this.setState({
          stopPlay:false,
          startPlay:true
        })
      }else{
        r = e
      }
      
    });
    this.setState({
      stopPlay:true,
      startPlay:false,
      currentPositionSec: r.current_position,
      currentDurationSec: r.duration,
      playTime: this.audioRecorderPlayer.mmssss(
        Math.floor(r.current_position),
      ),
      duration: this.audioRecorderPlayer.mmssss(Math.floor(r.duration)),
    });
  };
  
  onPausePlay = async () => {
    await this.audioRecorderPlayer.pausePlayer();
    this.setState({
      startPlay:true,
      stopPlay:false
    })
  };
  
  onStopPlay = async () => {
    console.log('onStopPlay');
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
    this.setState({
      startPlay:true,
      stopPlay:false
    })
  };
  requestPermission = () => {
    Alert.alert("Enable Microphone",
    "Your microphone needs to be enabled for you to record your cough",
    [
      {
          text:"Cancel",
          onPress:()=>console.log('cancel press'),
          style:'cancel'
      },
      {
          text:"Enable",
          onPress:()=>Linking.openURL('app-settings:')
      },
  ],
  {
      cancelable:true
  }
    )
  }
  back = () => {
    console.log("back called")
    return(
    <View style={{justifyContent:'center'}}>
        {this.recording()}
          {this.recording2()}
      
    <View
      style={{
        position:'absolute',
        borderRadius:width,
        borderWidth:3,
        borderColor:"#000",
        transform: [
         
          {
            translateX: ((width) *0.5) / 2
          }
        ],
      }}>
           <View style={{justifyContent:'center',alignItems:'center'}}>
    
        {this.mic()}
        </View>
    </View>
    </View>
    
  )};
  modal = () => {
    console.log("MODAL CALLED")
    this.anim2()
    return(
    <Animated.View
      style={{
        position:'absolute',
        opacity: this.state.anim1,
        justifyContent:'center',
        alignItems:'center',
        zIndex:4,
        width,
        padding:20,
        height,
        backgroundColor:'rgba(0,0,0,0.2)',
      }}>
        <TouchableWithoutFeedback onPress={()=>this.toggleCta()}>
        <View style={{position:'absolute',width,height,backgroundColor:'rgba(0,0,0,0.2)'}}></View>
        </TouchableWithoutFeedback>
        <Animated.View   style={{
          zIndex:2,
          justifyContent:'space-between',
          alignItems:'center',
          backgroundColor:'#fff',
          height:height/2,
          width:width-40,
          padding:20,
          transform:[
            {
              scale:this.state.anim2
            }
          ]
        }}>
        <Image
        resizeMode="contain"
        style={styles.coughImg}
        source={require('../../assets/page11/Asset5.png')}
      />
        <View>
          <Text style={styles.ctaText}>Cough into your phone's microphone</Text>
        </View>
        <Button
        title="Begin"
        titleStyle={styles.buttonText}
        buttonStyle={styles._buttonStyle}
        onPress={()=>{
          this.toggleCta();
          this.onStartRecord() 
         
        }}
      />
      </Animated.View>
      
    </Animated.View>
  )};
  mic = () => (
    <View>
        {
          !this.state.startRecord && !this.state.startPlay && !this.state.stopPlay && !this.state.stopRecord
          ?  <TouchableOpacity onPress={()=>this.onStartRecord()}>
                <View style={{ width:(width) *0.5,
    height:(width) * 0.5,alignItems:'center',justifyContent:'center'}}><Icon name="mic" size={(width) *0.15}/></View>
            </TouchableOpacity>
        : null
        }
        {
          this.state.startRecord && !this.state.startPlay && !this.state.stopRecord
          ? <TouchableOpacity onPress={()=>this.onStopRecord()}>
          <View style={{ width:(width) *0.5,
height:(width) * 0.5,alignItems:'center',justifyContent:'center'}}><Icon name="stop-circle" size={(width) *0.15}/></View>
      </TouchableOpacity>
        :null
        }
        {
          this.state.startPlay  && !this.state.stopPlay && !this.state.startRecord
          ?  <TouchableOpacity onPress={()=>this.onStartPlay()}>
          <View style={{ width:(width) *0.5,
height:(width) * 0.5,alignItems:'center',justifyContent:'center'}}><Icon name="play" size={(width) *0.15}/></View>
      </TouchableOpacity>
          :null
        }
        {
          this.state.stopPlay && !this.state.startPlay && !this.state.startRecord
          ?  <TouchableOpacity onPress={()=>this.onPausePlay()}>
          <View style={{ width:(width) *0.5,
height:(width) * 0.5,alignItems:'center',justifyContent:'center'}}><Icon name="pause" size={(width) *0.15}/></View>
      </TouchableOpacity>
          :null
        }
      
    </View>
  );
  ctaImg = () => (
    <View
      style={{
        position:'absolute',
        right:20,
      }}>
      <Image
        resizeMode="contain"
        style={styles.ctaImg}
        source={require('../../assets/page11/Asset3.png')}
      />
    </View>
  );
  ctaTxtImg = () => (
    <View
      style={{
        position:'absolute',
        right:20,
        transform: [
          {
            translateX:-100
          }
        ],
      }}>
      <Image
        resizeMode="contain"
        style={styles.ctaImg}
        source={require('../../assets/page11/Asset4.png')}
      />
    </View>
  );
  cta = () => (
    <TouchableWithoutFeedback onPress={()=>this.toggleCta()}>
      <View>
        {this.ctaImg()}
        {this.ctaTxtImg()}
      </View>
    </TouchableWithoutFeedback>
  )
  toggleCta = () => {
    const showModal = this.state.showModal
    this.setState({showModal:!showModal})
  }
  button = () => (
    <Animated.View
      style={{
        opacity: this.state.anim1,
        transform: [
          {
            translateY: this.state.anim1.interpolate({
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
        onPress={ async()=>{
          this.audioRecorderPlayer.stopRecorder();
          this.audioRecorderPlayer.removeRecordBackListener();
          this.audioRecorderPlayer.stopPlayer();
          this.audioRecorderPlayer.removePlayBackListener();          //Set record
          this.props.setRecord(this.state.record);
          //Next question
          this.props.nextQues()
        }}
      />
      </SafeAreaView>
    </Animated.View>
  )
  componentDidMount() {
    check(PERMISSIONS.IOS.MICROPHONE)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.GRANTED:
        this.setState({blocked:false})
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        this.requestPermission()
        this.setState({blocked:true})
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    console.log(error)
  });

    this.props.whiteBg(true)
    this.anim1();
    this.setState({showModal:true})
    this.props.showSkip(true)
   
  }
  componentWillUnmount(){
    this.audioRecorderPlayer.stopRecorder();
          this.audioRecorderPlayer.removeRecordBackListener();
          this.audioRecorderPlayer.stopPlayer();
          this.audioRecorderPlayer.removePlayBackListener();
    this.props.showSkip(false)
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.back()}
        {this.cta()}
          
       
        {
          this.state.showModal 
          ? this.modal()
          : null
        }
        <TouchableOpacity style={{position:'absolute'}} onPress={()=> this.onStartRecord()}>
          <View style={{position:'absolute', display: this.state.startPlay  || this.state.stopPlay ? null : "none", alignItems:'center',justifyContent:'center',
          transform:[
            {
              translateY:height/2 + 50
            }
          ],
          width,
          
          }}>
          <Text>Don't like your recording? Create a new one</Text>
          </View>
          </TouchableOpacity>
        {this.button()}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({nextQues,setRecord,whiteBg,showSkip},dispatch)
}
export default connect(null,mapDispatchToProps)(Page11);
