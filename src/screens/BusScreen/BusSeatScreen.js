import React, { useState, useMemo, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { BusSeatScreenStyle } from '../../styles';
import IconMI from "react-native-vector-icons/MaterialCommunityIcons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import { RouteName } from "../../routes";
import { useSelector } from "react-redux";
import { Button, LikeUnlike } from "../../components";
import { SH, SF, SW, Colors } from "../../utils";
import { BusSeatData, MobileSelectData, BusSeatUpperData, BusSeatShowData, busSeat } from '../../utils/Imagedataset';
import { useTranslation } from 'react-i18next';
import { useTheme,useRoute  } from '@react-navigation/native';
import BusSeats from "./BusSeats";
import { BusDetails } from "../../Api/ApiMaster";
import UserContext from './../../../UserContext';


const BusSeatScreen = (props) => {
    let CurrentRow = 0;
    const { navigation } = props;

    const { t } = useTranslation();
    const route = useRoute();
    const { detailsStore } = useSelector(state => state.DataReducer) || {};
    const [tabShow, SettabShow] = useState('1');
    const ColumnCount = [{}, {}, {}, {}, {}]
    const { Colors } = useTheme();
    const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);
    const { userData, setUserData } = React.useContext(UserContext);
    const [Loading, setLoading] = useState(true);
    const[Data,setData] = useState([])

    useEffect(()=>{
        console.log('navigation',route)
        BusDetails(userData[0].RequestNumber,route.params?.data.sourceCode,route.params?.data.busCode,userData[0].Token,setLoading,setData,props)
    },[])




    const MobileSelect = (item, index) => {
        return (
            <View style={BusSeatScreenStyles.FlightsCityBox}>
                <View style={BusSeatScreenStyles.BackArrowBoxWidthSet}>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.BUS_LIST_SCREEN)}>
                        <IconA name="arrowleft" size={SF(20)} color={Colors.BlackText} />
                    </TouchableOpacity>
                </View>
                <View style={BusSeatScreenStyles.CityMainBoxWrap}>
                    <View style={BusSeatScreenStyles.CityMainBox}>
                        <Text style={BusSeatScreenStyles.CityText}>1</Text>
                        <Text style={BusSeatScreenStyles.RchSubheadTextStyle}>3 | 2</Text>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={BusSeatScreenStyles.MinFlexView}>
            <View>
                <View>
                    <FlatList
                        data={MobileSelectData}
                        renderItem={({ item, index }) => MobileSelect(item, index)}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={BusSeatScreenStyles.ContentContainerStyle}
            >
                <View>
                    <View style={BusSeatScreenStyles.MinFlexView}>
                        <View>
                            {tabShow == '1' ?
                                <View>
                                    {
                                       
                                            <BusSeats data={Data?.seates} />
                                    }

                                </View> : null}
                        </View>
                    </View>
                </View>
            </ScrollView >
            <View>
                {/* <View style={BusSeatScreenStyles.BusSratflatlistbox}>
                    <FlatList
                        data={BusSeatShowData}
                        renderItem={({ item, index }) => BusSeatShowFunction(item, index)}
                        keyExtractor={item => item.id}
                        horizontal
                    />
                </View> */}
                <View style={BusSeatScreenStyles.BusFinalBoookedBox}>
                    <View style={BusSeatScreenStyles.Widthone}>
                        <Text style={BusSeatScreenStyles.Selectedtext}>{t("Selected_Seat")}</Text>
                        <Text style={BusSeatScreenStyles.SelectedSeattext}>17U</Text>
                    </View>
                    <View style={BusSeatScreenStyles.Widthtwo}>
                        <Text style={BusSeatScreenStyles.Selectedtext}>{t("Book_for")}</Text>
                        <Text style={BusSeatScreenStyles.SelectedSeattext}><IconFA name="rupee" color={Colors.black_text_color} size={SF(14)} /> 1</Text>
                    </View>
                    <View style={BusSeatScreenStyles.Widththree}>
                        <Button title={t('Proceed')} ButtonStyle={BusSeatScreenStyles.ButtonStyle} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
                    </View>
                </View>
            </View>
        </View >
    );
};
const styles = StyleSheet.create({
    seat: {
        //   flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 5, marginBottom: 15
        //   width:80
    },
    seatText: {
        fontSize: 16,
    },
    row: {
        flexDirection: 'row', justifyContent: 'space-between'
        //   ,flexWrap:'wrap'
    },
    seatSpacer: {
        // Adjust spacer width as needed
    },
    rowcheck: {

        flexDirection: 'row', width: '100%', height: 100, marginVertical: 10,
    }
});
export default BusSeatScreen;