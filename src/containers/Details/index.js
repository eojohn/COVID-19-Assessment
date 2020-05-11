/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Animated, Easing, Dimensions,SafeAreaView} from 'react-native';
import Header from '../../components/Question';
import Detail from '../../components/Detail';
import FootNote from '../../components/FootNote';
import {connect} from 'react-redux';
import {styles} from './styles';
let {width, height} = Dimensions.get('window');
height = height + 70
class Details extends Component {
  state = {
    anim1: new Animated.Value(0),
    covid:false,
    sos:[
      {
        question:this.props.info.hasCovid ? "Why does the loss of SOS makes me a candidate for COVID-19?" : "What does it mean to lose my SOS?",
        answer:"This killing of the olfactory nerve cells is likely to be the main reason people lose their sense of smell after an infection. Once 20-30% of the olfactory nerve cells have died, people will report they have lost their sense of smell."
      },
      {
        question:"Is my loss of SOS permanent?",
        answer:"No, depending on the severity of the initial infection, your sense of smell can return within a few days or weeks."
      },
    ],
    sosSource:[
      {
        label:"Ekberg, Jenny, et al. “Coronavirus Might Cause Loss of Smell, or Anosmia. But It Probably Won't Be Permanent.” The Conversation, 10 Apr. 2020, theconversation.com/coronavirus-might-cause-loss-of-smell-or-anosmia-but-it-probably-wont-be-permanent-134548."
      }

    ],
    toes:[
      {
        question:"What are COVID toes?",
        answer:"It is common for people to develop rashes when they're battling infections and COVID - 19 is no different. Predominant in children, people who develop purple lesions on or around their toes should not panic if that is their only symptom as patients who are developing these COVID toes are doing extremely well and are able to recover fully at home. However, we'll still recommend a COVID - 19 test just in case."
      },
      {
        question:"Are COVID toes permanent?",
        answer:"COVID toes or purple lesions will go away on its own."
      },
    ],
    toeSource:[
      {
        label:"Godoy, Maria. “From Loss Of Smell To 'COVID Toes': What Experts Are Learning About Symptoms.” NPR, NPR, 6 May 2020, www.npr.org/sections/goatsandsoda/2020/05/06/850707907/from-loss-of-smell-to-covid-toes-what-experts-are-learning-about-symptoms."
      }

    ],
    sob:[
      {
        question:this.props.info.hasCovid ? "Why does SOB makes me a candidate for COVID-19?" : "What does it mean to have SOB?",
        answer: this.props.info.hasCovid ? "Shortness of breath, or dyspnea or breathlessness, is caused by a decline in lung function to a threshold that makes it hard to breathe. The COVID-19 virus inflames the mucous membranes of the lungs, which damages the alveoli that supply oxygen to the bloodstream. The inflammation or swelling makes it hard to breathe and can put you at risk for pneumonia." : "Shortness of breath, or dyspnea or breathlessness, is caused by a decline in lung function to a threshold that makes it hard to breathe."
      }
    ],
    sobSource:[
      {
        label:"Rokadia, Haala K., and Fccp. “What Does Shortness of Breath Feel Like? A Lung Doctor Explains Coronavirus Symptoms - Mira.” RSS, Mira, 19 Apr. 2020, www.talktomira.com/post/what-does-shortness-of-breath-feel-like-a-doctor-explains-coronavirus-symptoms."
      },
      {
        label:"Belluck, Pam. “What Does the Coronavirus Do to the Body?” The New York Times, The New York Times, 11 Mar. 2020, www.nytimes.com/article/coronavirus-body-symptoms.html."
      }
    ],
    dry:[
      {
        question:"What is a dry cough?",
        answer: this.props.hasCovid ? "A dry cough one where no mucus or phlegm is produced with the cough. It produces a consistent barking or hoarse sound. A dry cough is associated with over ~80% of positive COVID - 19 patients." : "A dry cough one where no mucus or phlegm is produced with the cough. It produces a consistent barking or hoarse sound."
      }
    ],
    drySource:[
      {
        label:"Groth, Leah, and Leah Groth. “What Is a Dry Cough? Experts Explain the Coronavirus Symptom.” Health.com, 23 Mar. 2020, www.health.com/condition/infectious-diseases/coronavirus/what-is-a-dry-cough."
      }
    ],
    fever:[
      {
        question:this.props.info.hasCovid ? "Why does a fever make me a candidate for COVID - 19?" : "What is a fever?",
        answer:"A fever is a temporary increase in your body temperature, often due to an illness. Having a fever is a sign that something out of the ordinary is going on in your body. "
      }
    ],
    feverSource:[
      {
        label:"“Fever.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 21 July 2017, www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759."
      }
    ],
    head:[
      {
        question:"What is a headache?",
        answer:"A painful sensation in any part of the head, ranging from sharp to dull, that may occur with other symptoms."
      }
    ],
    headSource:[
      {
        label:"“Headache.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 11 Jan. 2018, www.mayoclinic.org/symptoms/headache/basics/definition/sym-20050800."
      }
    ],
    poop:[
      {
        question: this.props.info.hasCovid ? "Why does diarrhea make me a candidate for COVID - 19?" : "Is diarrhea temporary?",
        answer:this.props.info.hasCovid ? "Most cases of diarrhea resolve without treatment. However, severe diarrhea can cause dehydration, which can be life-threatening if untreated. Close to 14% of people with COVID-19 experience headaches." : "Most cases of diarrhea resolve without treatment. However, severe diarrhea can cause dehydration, which can be life-threatening if untreated."
      }
    ],
    poopSource:[
      {
        label:`“Diarrhea When to See a Doctor.” Mayo Clinic, Mayo Foundation for Medical Education and Research, 16 Apr. 2019, www.mayoclinic.org/symptoms/diarrhea/basics/when-to-see-doctor/sym-20050926.`
      },
      {
        label:"Salzberger, Bernd, et al. “Successful Containment of COVID-19: the WHO-Report on the COVID-19 Outbreak in China.” Infection, vol. 48, no. 2, 2020, pp. 151–153., doi:10.1007/s15010-020-01409-4."
      }
    ]
  };
  anim1 = () => {
    Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  header = () => {
    let text = "";
    switch(this.props.info.symptom){
      case "sos":
          text = "Sense of Smell (SOS)";
          break;
      case "toes":
          text = "COVID Toes";
          break;
      case "sob":
          text = "Shortness of Breath (SOB)";
          break;
      case "dry":
          text = "Dry Cough"
          break;
      case "fever":
          text = "Fever"
          break;
      case "head":
          text = "Headache"
          break;
      case "poop":
          text = "Diarrhea"
          break;
      default:
        text = "Sense of Smell (SOS)";
        break;
    }    
    return(
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
      <Header Header={text} />
    </Animated.View>
    </SafeAreaView>
  )}
  
  
  text = () => {
    let symptom;
    switch(this.props.info.symptom){
      case "sos":
          symptom = this.state.sos;
          break;
      case "sob":
        symptom = this.state.sob;
          break;
      case "dry":
        symptom = this.state.dry;
          break;
      case "fever":
        symptom = this.state.fever;
          break;
      case "toes":
        symptom = this.state.toes;
          break;
      case "head":
        symptom = this.state.head;
          break;
      case "poop":
        symptom = this.state.poop;
          break;
      default:
        symptom = this.state.sos;
        break;
    }  
    
    return(
    <Animated.View
      style={{
        flex:1,
        justifyContent:'flex-start',
        opacity: this.state.anim1,
        transform: [
          {
            translateY: this.state.anim1.interpolate({
              inputRange: [0, 1],
              outputRange:[0,10]
            }),
          },
          
        ],
      }}>
        {
          symptom.map((item,index)=>{
            return(
              <Detail key={index} answer={item.answer} question={item.question}/>
            )
          })
        }
    </Animated.View>
  );}
  

  footNotes = () => {
    let symptom;
    switch(this.props.info.symptom){
      case "sos":
          symptom = this.state.sosSource;
          break;
      case "sob":
        symptom = this.state.sobSource;
          break;
      case "toes":
        symptom = this.state.toeSource;
          break;
      case "dry":
        symptom = this.state.drySource;
          break;
      case "fever":
        symptom = this.state.feverSource;
          break;
      case "head":
        symptom = this.state.headSource;
          break;
      case "poop":
        symptom = this.state.poopSource;
          break;
      default:
        symptom = this.state.sosSource;
        break;
    }  
    return(
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
          symptom.map((item,index)=>{
            return(
              <FootNote label={item.label} key={index}/>
            )
          })
        }
    </SafeAreaView>

    </Animated.View>
  )}
  componentDidMount() {
    this.anim1();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.text()}
        {this.footNotes()}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return{
    info:state.answers
  }
}
export default connect(mapStateToProps)(Details);