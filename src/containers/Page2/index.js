/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Text, Image, Easing, Dimensions,FlatList,TouchableOpacity,SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Header from '../../components/Question';
import {setAge,nextQues,hideSmoke} from './actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {styles} from './styles';
let {width, height} = Dimensions.get('window');
// height = height + 70
class Page2 extends Component {
  state = {
    data:[
      {name:"0 - 9 yrs"},
      {name:"10 - 18 yrs"},
      {name:"19 - 29 yrs"},
      {name:"30 - 39 yrs"},
      {name:"40 - 49 yrs"},
      {name:"50 - 59 yrs"},
      {name:"Elderly"},
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
      <Header Header="What is your age?" />
      </SafeAreaView>
    </Animated.View>
  )
  face = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity: this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, ((width-140) *0.7)/ 2],
            }),
          },
          {
            translateX: 20
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
  back = () => (
    <Animated.View
      style={{
        zIndex:-2,
        position:'absolute',
        opacity: this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
          },
          {
            translateX: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [-60,-40 ],
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
  index0 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
          },{
            translateX: 20
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
          style={{width:width*0.5,height:width*0.8}}
          source={require(`../../assets/page2/Asset1.png`)}
        />
    </Animated.View>
  )
  index1 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
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
        {/* <Image
          resizeMode="contain"
          style={styles.backImg}
          source={require(`../../assets/page2/Asset2.png`)}
        /> */}
    </Animated.View>
  )
  index2 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
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
        {/* <Image
          resizeMode="contain"
          style={styles.backImg}
          source={require(`../../assets/page2/Asset3.png`)}
        /> */}
    </Animated.View>
  )
  index3 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
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
        {/* <Image
          resizeMode="contain"
          style={styles.backImg}
          source={require(`../../assets/page2/Asset4.png`)}
        /> */}
    </Animated.View>
  )
  index4 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
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
        {/* <Image
          resizeMode="contain"
          style={styles.backImg}
          source={require(`../../assets/page2/Asset5.png`)}
        /> */}
    </Animated.View>
  )
  index5 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
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
        {/* <Image
          resizeMode="contain"
          style={styles.backImg}
          source={require(`../../assets/page2/Asset6.png`)}
        /> */}
    </Animated.View>
  )
  index6 = () => (
    <Animated.View
      style={{
        position:'absolute',
        opacity:this.state.anim1,
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [width / 2, width / 2],
            }),
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
        {/* <Image
          resizeMode="contain"
          style={styles.backImg}
          source={require(`../../assets/page2/Asset7.png`)}
        /> */}
    </Animated.View>
  )
  handleSelect = (index) => {
   //Set age
   this.props.setAge(index);
   if(index === 0){
     this.props.hideSmoke()
   }
   //Go to next question
   this.props.nextQues()
  }
  choices = () => (
    <FlatList
      style={styles.list}
      data = {this.state.data}
      keyExtractor = {(item,index)=>`list-item-${index}`}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>this.handleSelect(index)}>
          <View key={index} style={{padding:10,opacity: this.state.index === index ? 1 : 0.5}}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
  handlePress = () => {
    //Set age
    this.props.setAge(this.state.index);
    if(this.state.index === 0){
      this.props.hideSmoke()
    }
    //Go to next question
    this.props.nextQues()
  }
  button = () => {
    this._anim1()
    return(
    <Animated.View
      style={{
        opacity: this.state._anim1,
        transform: [
          {
            translateY: this.state._anim1.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 0],
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
        onPress={()=>this.handlePress()}
      />
      </SafeAreaView>
    </Animated.View>
    )
  }
  componentDidMount() {
    this.anim1();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {
          this.state.index === null
          ? this.face()
          : null
        }
        {
          this.state.index === 0
          ? this.index0()
          : null
        }
        {
          this.state.index === 1
          ? this.index1()
          : null
        }
        {
          this.state.index === 2
          ? this.index2()
          : null
        }
        {
          this.state.index === 3
          ? this.index3()
          : null
        }
        {
          this.state.index === 4
          ? this.index4()
          : null
        }
        {
          this.state.index === 5
          ? this.index5()
          : null
        }
        {
          this.state.index === 6
          ? this.index6()
          : null
        }
        {this.back()}
        {this.choices()}
        {
          this.state.index !== null
          ? this.button()
          : null
        }    
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({nextQues,setAge,hideSmoke}, dispatch);
}
export default connect(null,mapDispatchToProps)(Page2);
