import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, FlatList, TouchableOpacity} from "react-native";
import { HelpScreenStyles } from '../../styles';
import { Button, Spacing, ConfirmationAlert } from '../../components';
import { SH, SF, SW, Colors,Fonts } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';


const Data = [{ id: 1, name: 'سواری',address:'ComingSoon' }, { id: 2, name: 'ون',address:'ComingSoon' }
    , { id: 3, name: 'اتوبوس',address:'HOME_SCREEN' }, { id: 4, name: 'ارسال بار',address:'ComingSoon' }]


const Selector = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();



    return (

        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center',paddingTop:'40%'}}>
            <FlatList
                data={Data}
                numColumns={2}
                style={{marginHorizontal:'1%'}}
                renderItem={({item,index})=>(

                    <TouchableOpacity style={{backgroundColor:'#e6f2ff',borderWidth:1,width:'48%',borderRadius:5
                    ,alignItems:'center',justifyContent:'center',margin:'1%',height:SH(180)}}
                    onPress={()=>{
                        if(item.address == 'ComingSoon')
                        {
                            navigation.navigate(RouteName.ComingSoon)
                        }
                        else
                        {
                            navigation.navigate(RouteName.HOME_SCREEN)
                        }

                    }}
                    >
                        <Text style={{textAlign:'center',fontSize:SF(25),fontFamily:Fonts.Poppins_Italic}}
                       
                        >
                        {item.name}
                        </Text>

                        </TouchableOpacity>
    )}

            />

        </View>


    );
};
export default Selector;
