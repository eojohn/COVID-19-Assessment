import React, {Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {showPhelgm} from '../../store/Actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class HOVBTN extends Component{
    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.showPhelgm()}>
            <View style={{display: this.props.showSkip ? null : "none" }}>
                <Text>{"Skip"}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}
const mapStateToProps = state => {
    return{
        showSkip:state.answers.showSkip
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({showPhelgm},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(HOVBTN);