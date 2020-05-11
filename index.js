import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import ConfigureStore from './src/store/config';
import {iconsMap} from './src/store/AppIcons';
/*SCREENS*/
import App from './App';
import Results from './src/containers/Results';
import Details from './src/containers/Details';
/*COMPONENTS*/
import { Platform, View, Text } from 'react-native';
import HOCBTN from './src/components/HOCBTN';
import HOCLEFTBTN from './src/components/HOCLEFTBTN ';
const store = ConfigureStore();
//TEST SCREEN
Navigation.registerComponent('covid.Test',()=> (props) =>(
  <Provider store={store}>
    <App {...props} />
  </Provider>)
), () => App;
//RESULTS SCREEN
Navigation.registerComponent('covid.Results',()=> (props) =>(
  <Provider store={store}>
    <Results {...props} />
  </Provider>)
), () => Results;
//DETAILS SCREEN
Navigation.registerComponent('covid.Details',()=> (props) =>(
  <Provider store={store}>
    <Details {...props} />
  </Provider>)
), () => Details;
// HOVBTN 
Navigation.registerComponent('covid.HOVBTN',()=> (props) =>(
  <Provider store={store}>
    <HOCBTN {...props} />
  </Provider>)
), () => HOCBTN;
// HOCLEFTBTN 
Navigation.registerComponent('covid.HOCLEFTBTN',()=> (props) =>(
  <Provider store={store}>
    <HOCLEFTBTN {...props} />
  </Provider>)
), () => HOCLEFTBTN;
//Initial Screen [TEST]--STACK NAVIGATOR
const initScreen = {
    stack: {
        children: [
          {
              component: {
                name: 'covid.Test',
                options:{
                  topBar:{
                    noBorder:true,
                    visible:Platform.OS === "ios" ? true : false,
                    background:{
                      translucent:true,
                      color:"transparent"
                    },
                    rightButtons:[
                      {
                        id:"restart",
                        component:{
                          name:'covid.HOVBTN'
                        }
                      }
                    ],
                    leftButtons:[
                      {
                        id:"skip",
                        component:{
                          name:'covid.HOCLEFTBTN'
                        }
                      }
                    ],
                  },
                }
              },
              
          },
      ]
    }
}
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: initScreen
    });
  });