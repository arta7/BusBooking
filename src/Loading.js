import React, {Component} from 'react';
import {Text, View,StyleSheet} from "react-native";
import { Lottie} from '../src/components';
import images from './index';
export default class Loading extends Component{
    render(){
        return (
            <View style={styles.container}>
                   <Lottie source={images.kalanAnimation} />
                
            </View>
        );
    }
};

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',alignSelf:'center'
    }
});