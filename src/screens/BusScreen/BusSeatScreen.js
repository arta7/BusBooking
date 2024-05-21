import React, { useState, useMemo, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList, TextInput, StyleSheet } from "react-native";
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
import { useTheme, useRoute } from '@react-navigation/native';
import BusSeats from "./BusSeats";
import { BusDetails } from "../../Api/ApiMaster";
import UserContext from './../../../UserContext';
import { width } from "react-native-bottom-tab/src/AnimatedTabBar/utils";


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
    const [Data, setData] = useState([])
    const [BusPerson, setBusPerson] = useState([])

    useEffect(() => {
        console.log('navigation', route)
        BusDetails(userData[0].RequestNumber, route.params?.data.sourceCode, route.params?.data.busCode, userData[0].Token, setLoading, setData, props)
    }, [])




    const MobileSelect = (item, index) => {
        return (
            <View style={BusSeatScreenStyles.FlightsCityBox}>
                <View style={BusSeatScreenStyles.BackArrowBoxWidthSet}>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.BUS_LIST_SCREEN)}>
                    <IconA name="arrowright" size={SF(20)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                </View>
                {/* <View style={BusSeatScreenStyles.CityMainBoxWrap}>
                    <View style={BusSeatScreenStyles.CityMainBox}>
                        <Text style={BusSeatScreenStyles.CityText}>1</Text>
                        <Text style={BusSeatScreenStyles.RchSubheadTextStyle}>3 | 2</Text>
                    </View>
                </View> */}
            </View>
        )
    }

    const BusSeatShowFunction = (item, index) => {
        return (
            <View style={BusSeatScreenStyles.SeatAvlblBox}>
                <View style={BusSeatScreenStyles.SeatAvChildBox}>
                    <IconMI name={item.Seaticon} color={item.SeaticonColor} size={SF(22)} />
                    <Text style={BusSeatScreenStyles.SeatAvChildBoxText}>{t(item.text)}</Text>
                </View>
            </View>
        )
    }

    const renderPerson = (item, index) => {
        return (
            <View style={{ width: '100%', height: 'auto', padding: 10, backgroundColor: 'white',borderRadius:10, borderWidth: 0.5, marginBottom: '3%' }}>
                    <View>
                        <Text style={{color:'black',fontSize:SH(12)}}>مسافر صندلی {item.chairNumber}: </Text>
                    </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center' }}>
                    <TextInput
                        style={{ width: '40%', height: 50, color: 'black', borderWidth: 1, borderRadius: 10, marginRight: '2%' }}
                        onChangeText={(text) => { }}
                        value={''}
                        placeholder={'نام '}
                        placeholderTextColor={'black'}
                    />

                    <TextInput
                        style={{ width: '55%', height: 50, color: 'black', borderWidth: 1, borderRadius: 10 }}
                        onChangeText={(text) => { }}
                        value={''}
                        placeholder={'نام خانوادگی '}
                        placeholderTextColor={'black'}
                    />
                </View>
                <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        style={{ width: '97%', height: 50, color: 'black', borderWidth: 1, borderRadius: 10 }}
                        onChangeText={(text) => { }}
                        value={''}
                        placeholder={'شماره موبایل'}
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        style={{ width: '97%', height: 50, color: 'black', borderWidth: 1, borderRadius: 10 }}
                        onChangeText={(text) => { }}
                        value={''}
                        placeholder={'تاریخ تولد'}
                        placeholderTextColor={'black'}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center' }}>
                    <TextInput
                        style={{ width: '65%', height: 50, color: 'black', borderWidth: 1, borderRadius: 10, marginRight: '2%' }}
                        onChangeText={(text) => { }}
                        value={''}
                        placeholder={'کد ملی'}
                        placeholderTextColor={'black'}
                    />

                    <TextInput
                        style={{ width: '30%', height: 50, color: 'black', borderWidth: 1, borderRadius: 10 }}
                        onChangeText={(text) => { }}
                        value={''}
                        placeholder={'جنسیت'}
                        placeholderTextColor={'black'}
                    />
                </View>



            </View>
        )
    }

    return (
        <View style={BusSeatScreenStyles.MinFlexView}>
            <View >
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

                <View style={{ width: '100%', height: (100) }}>

                </View>



                <View style={[{ marginBottom: '2%', borderWidth: 1, paddingBottom: '5%', paddingTop: '5%', borderRadius: 10, borderColor: 'gray' }]}>
                    <View style={[BusSeatScreenStyles.BusSratflatlistbox, {
                        elevation: 1, borderRadius: 10, width: '90%', marginHorizontal: '5%'
                    }]}>
                        <FlatList
                            data={BusSeatShowData}
                            renderItem={({ item, index }) => BusSeatShowFunction(item, index)}
                            keyExtractor={item => item.id}
                            horizontal
                        />
                    </View>
                    <View style={{ elevation: 2, borderRadius: 10, marginTop: 5, borderRadius: 10, width: '90%', marginHorizontal: '5%' }}>
                        <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: SH(15) }} >
                                جلوی اتوبوس
                            </Text>
                            <View style={{ width: '40%', height: 1, backgroundColor: 'black', marginVertical: 5 }}>

                            </View>

                        </View>
                        <View >
                            {

                                <BusSeats data={Data} setData={setData}  BusPerson={BusPerson} setBusPerson={setBusPerson} />
                            }

                        </View>
                    </View>
                </View>



                {
                    <View >
                        {

                            <FlatList
                                data={BusPerson}
                                renderItem={({ item, index }) => renderPerson(item, index)}
                                keyExtractor={item => item.id}
                            />
                        }

                    </View>

                }




            </ScrollView >
            <View style={{ marginTop: '5%' }}>

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
                        <Button title={t('Proceed')} ButtonStyle={[BusSeatScreenStyles.ButtonStyle, { backgroundColor: 'red' }]} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
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