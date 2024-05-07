import React, { useEffect, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button, Spacing } from '../../components';
import { RouteName } from '../../routes';
import { Swiperdata, SH, } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = ({ navigation }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);

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

  const RenderItem = ({ item }) => {

 

   
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyles.ScrollViewStyle}>
          <View>
            <View style={SwiperStyles.AnimationViewStyle}>
              {item.animation}
            </View>
          </View>
        </ScrollView>
        <Text style={SwiperStyles.TitleStyles}>
          {t(item.title)}
        </Text>
        <Text style={SwiperStyles.Textstyle}>
          {t(item.text)}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {

    return (
      <View style={SwiperStyles.BgButtonView}>
        <View style={SwiperStyles.ButtonCircle}>
          <Button
            title={t("Get_Started")}
            onPress={
              () => {
                GetToken().then((value)=>{
                  if(value == false)
                  navigation.navigate(RouteName.LOGIN_SCREEN)
                  else
                  navigation.navigate(RouteName.HOME_SCREEN)
                })
              }
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.NextTextStyle}>{t("Next_Text")}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
  
    return (
      <View style={SwiperStyles.BgButtonView}>
        <TouchableOpacity onPress={() => {
          GetToken().then((value)=>{
            if(value == false)
            navigation.navigate(RouteName.LOGIN_SCREEN)
            else
            navigation.navigate(RouteName.HOME_SCREEN)
          })
            


        }}>
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.NextTextStyle}>{t("Skip_Text")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.ActiveDotStyles}
        dotStyle={SwiperStyles.DotSwiperStyle}
      />
    </>
  );
};
export default App;