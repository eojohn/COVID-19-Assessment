import React, {Component} from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import Test from './src/containers/DiagnosticTest';
class App extends Component {
  static  options(passProps){
    return{
        topBar:{
            title:{
                text:'Groups'
            }
        }
    }
} 
  render() {
    return (
      // <SafeAreaView>
        <Test />
        // </SafeAreaView>
    );
  }
}
export default App;
