import React, {Component} from 'react';
import {View} from 'react-native';
import WelcomeScreen from '../Page1';
import AgeScreen from '../Page2';
import GenderScreen from '../Page3';
import HeightScreen from '../Page4';
import WeightScreen from '../Page5';
import SmellScreen from '../Page6';
import TasteScreen from '../Page7';
import SmokeScreen from '../Page8';
import BreathScreen from '../Page9';
import CoughScreen from '../Page10';
import RecordScreen from '../Page11';
import PhlegmScreen from '../Page13';
import DryScreen from '../Page14';
import PoopScreen from '../Page15';
import FootScreen from '../Page15COPY';
import HeadacheScreen from '../Page16';
import FeverScreen from '../Page17';
import MinResults from '../MinResults';
import {connect} from 'react-redux';
class DiagnosticTest extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {
          !this.props.startTest
          ?  <WelcomeScreen />
          :  null
        }
        {
          this.props.startTest && !this.props.showGender
          ? <AgeScreen />
          : null
        }
        {
          this.props.showGender && !this.props.showHeight
          ? <GenderScreen />
          : null
        }
        {
          this.props.showHeight && !this.props.showWeight
          ? <HeightScreen />
          : null
        }
        {
          this.props.showWeight && !this.props.showSmell
          ? <WeightScreen />
          : null
        }
        {
          this.props.showSmell && !this.props.showTaste
          ? <SmellScreen />
          : null
        }
        {
          this.props.showTaste && !this.props.showSmoke && !this.props.showBreath
          ? <TasteScreen />
          : null
        }
       
        {
          this.props.showSmoke && !this.props.showBreath && !this.props.showCough
          ? <SmokeScreen />
          : null
        }
        {
          this.props.showBreath && !this.props.showCough 
          ? <BreathScreen />
          : null
        }
        {
          this.props.showCough && !this.props.showRecord
          ? <CoughScreen />
          : null
        }
        {
          this.props.showRecord && !this.props.showPhelgm && !this.props.skipCough
          ? <RecordScreen />
          : null
        }
        {
          this.props.showPhelgm && !this.props.showDry && !this.props.skipCough && !this.props.showPoop
          ? <PhlegmScreen />
          : null
        }
        {
          this.props.showDry  && !this.props.showPoop && !this.props.skipCough
          ? <DryScreen />
          : null
        }
        {
          this.props.showPoop  && !this.props.showHead && !this.props.showFoot ||  this.props.showCough && this.props.skipCough && !this.props.showHead && !this.props.showFoot
          ? <PoopScreen />
          : null
        }
        {
          this.props.showFoot  && !this.props.showHead 
          ? <FootScreen />
          : null
        }
        {
          this.props.showHead  && !this.props.showFever 
          ? <HeadacheScreen />
          : null
        }
        {
          this.props.showFever  && !this.props.showMinResults
          ? <FeverScreen />
          : null
        }
        {
          this.props.showMinResults 
          ? <MinResults />
          : null
        }
      </View>
    );
  }
}
const mapStateToProps = state => {
  return{
    startTest:state.nav.startTest,
    showGender:state.nav.showGender,
    showHeight:state.nav.showHeight,
    showWeight:state.nav.showWeight,
    showSmell:state.nav.showSmell,
    showTaste:state.nav.showTaste,
    showSmoke:state.nav.showSmoke,
    showBreath:state.nav.showBreath,
    showCough:state.nav.showCough,
    showRecord:state.nav.showRecord,
    showPhelgm:state.nav.showPhelgm,
    showDry:state.nav.showDry,
    showPoop:state.nav.showPoop,
    showHead:state.nav.showHead,
    showFever:state.nav.showFever,
    showMinResults:state.nav.showMinResults,
    hideSmoke:state.nav.hideSmoke,
    skipCough:state.nav.skipCough,
    showFoot:state.nav.showFoot,
  }
}
export default connect(mapStateToProps)(DiagnosticTest);
