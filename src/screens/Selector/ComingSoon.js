import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, FlatList } from "react-native";
import { HelpScreenStyles } from '../../styles';
import { Button, Spacing, ConfirmationAlert } from '../../components';
import { SH, SF, SW, Colors, Fonts } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';



const ComingSoon = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();



    return (

        <View style={{ flex: 1, backgroundColor: 'white',justifyContent:'center',alignItems:'center' }}>


            <Text style={{ textAlign: 'center', fontSize: SF(30), fontFamily: Fonts.Poppins_Italic }}>
            به زودی ...
            </Text>



        </View>


    );
};
export default ComingSoon;
