import React, {Component} from 'react';
import {View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {styles} from './styles';
import {reset} from '../../store/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class HOVBTN extends Component{
    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.reset()}>
            <View style={{...styles.container, display: this.props.testBegan ? null : "none" }}>
                <View style={{...styles.block,backgroundColor:this.props.whiteBg ? "#3ECB99" : "#fff"}}></View>
                <Icon style={styles.icon} name="ios-refresh" size={32} color="#000"/>
            </View>
            </TouchableOpacity>
        )
    }
}
const mapStateToProps = state => {
    return{
        testBegan:state.answers.testBegan,
        whiteBg:state.answers.whiteBG
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({reset},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(HOVBTN);