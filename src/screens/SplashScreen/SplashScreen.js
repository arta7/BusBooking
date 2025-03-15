import React, { useEffect, useMemo } from 'react';
import { View, StatusBar } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from '../../routes';
import { Lottie } from '../../components';
import { useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(colorrdata);
    const dispatch = useDispatch();
    const { Colors } = useTheme();
    const Styles = useMemo(() => Style(Colors), [Colors]);



        
    let GetToken=async()=>{
        var Token = await AsyncStorage.getItem('Token');
        console.log('Token',Token)
        if(Token == null || Token == '')
         {
          console.log('Token work')
             return false;
         }
         console.log('Token work2')
         return true;
     }

    useEffect(() => {
         (async function() {
        try {
         setTimeout(() => {
            GetToken().then((value)=>{
                if(value == false)
                    navigation.replace(RouteName.SWIPER_SCREEN)
                else
                navigation.replace(RouteName.Selector)
              })

            
                colorrdata ?
                    dispatch(color_picker_set_action(colorrdata))
                    :
                    dispatch(color_picker_set_action(Colors.theme_background))
         }, 2500);
            
        } catch (e) {
            console.error(e);
        }
    })();
    
     
    }, []);

       

    return (
        <View style={Styles.SplashMinView}>
            <View style={Styles.MinViewStyleSplash}>
                <Lottie source={images.Animation} />
            </View>
        </View>
    );
};
export default SplashScreen;