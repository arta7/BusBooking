import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { BusSeatScreenStyle } from '../../styles';
import IconMI from "react-native-vector-icons/MaterialCommunityIcons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import { RouteName } from "../../routes";
import { useSelector } from "react-redux";
import { Button, LikeUnlike } from "../../components";
import { SH, SF, SW, Colors } from "../../utils";
import { BusSeatData, MobileSelectData, BusSeatUpperData, BusSeatShowData } from '../../utils/Imagedataset';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const BusSeatScreen = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { detailsStore } = useSelector(state => state.DataReducer) || {};
    const [tabShow, SettabShow] = useState('1');

    const { Colors } = useTheme();
    const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);

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
                        <Text style={BusSeatScreenStyles.CityText}>{t(detailsStore.TravelCompany)}</Text>
                        <Text style={BusSeatScreenStyles.RchSubheadTextStyle}>{t(detailsStore.AcNonAc)} | {detailsStore.FromTme}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const BusSeatDataFlatlist = (item, index) => {
        return (
            <View style={BusSeatScreenStyles.FlexRowSeatBox}>
                <View style={BusSeatScreenStyles.Width50}>
                    <LikeUnlike
                        text={item.slepSeatName}
                        LikeColour={Colors.GreenColor}
                        UnlikeColour={Colors.TextWhiteColor}
                        index={index}
                        DefaultStyle={BusSeatScreenStyles.BusSeatBox}
                        ViewStyle={BusSeatScreenStyles.BuscusionStyle}
                    />
                </View>
                <View style={BusSeatScreenStyles.FlexRowSeatLeft}>
                    <LikeUnlike
                        text={item.slepSeatName}
                        LikeColour={Colors.GreenColor}
                        UnlikeColour={Colors.TextWhiteColor}
                        index={index}
                        DefaultStyle={BusSeatScreenStyles.BusSeatBox}
                        ViewStyle={BusSeatScreenStyles.BuscusionStyle}
                    />
                    <View style={BusSeatScreenStyles.LastListStyle}>
                        <LikeUnlike
                            text={item.slepSeatName}
                            LikeColour={Colors.GreenColor}
                            UnlikeColour={Colors.TextWhiteColor}
                            index={index}
                            DefaultStyle={BusSeatScreenStyles.BusSeatBox}
                            ViewStyle={BusSeatScreenStyles.BuscusionStyle}
                        />
                    </View>
                </View>
            </View >
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
                                    <FlatList
                                        data={BusSeatData}
                                        renderItem={({ item, index }) => BusSeatDataFlatlist(item, index)}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={BusSeatScreenStyles.ContentContainerStyle}
                                    />
                                </View> : null}
                            {tabShow == '2' ?
                                <View>
                                    <FlatList
                                        data={BusSeatUpperData}
                                        renderItem={({ item, index }) => BusSeatDataFlatlist(item, index)}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={BusSeatScreenStyles.ContentContainerStyle}
                                    />
                                </View> : null}
                        </View>
                    </View>
                </View>
            </ScrollView >
            <View>
                {/* <View style={BusSeatScreenStyles.TabBoxTwWidththreeoMin}>
                    <View style={BusSeatScreenStyles.TabBoxTwo}>
                        <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? [BusSeatScreenStyles.TabsettextActiveBoxTwo, BusSeatScreenStyles.TableftAciveBorder] : [BusSeatScreenStyles.TabsettextBoxTwo, BusSeatScreenStyles.TableftAciveBorder]}>
                            <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? BusSeatScreenStyles.TabsettextActiveTwo : BusSeatScreenStyles.TabsettextTwo}>{t("Lover")}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '2' ? [BusSeatScreenStyles.TabsettextActiveBoxTwo, BusSeatScreenStyles.TablrightAciveBorder] : [BusSeatScreenStyles.TabsettextBoxTwo, BusSeatScreenStyles.TablrightAciveBorder]}>
                            <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? BusSeatScreenStyles.TabsettextActiveTwo : BusSeatScreenStyles.TabsettextTwo}>{t("Upper")}</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <View style={BusSeatScreenStyles.BusSratflatlistbox}>
                    <FlatList
                        data={BusSeatShowData}
                        renderItem={({ item, index }) => BusSeatShowFunction(item, index)}
                        keyExtractor={item => item.id}
                        horizontal
                    />
                </View>
                <View style={BusSeatScreenStyles.BusFinalBoookedBox}>
                    <View style={BusSeatScreenStyles.Widthone}>
                        <Text style={BusSeatScreenStyles.Selectedtext}>{t("Selected_Seat")}</Text>
                        <Text style={BusSeatScreenStyles.SelectedSeattext}>17U</Text>
                    </View>
                    <View style={BusSeatScreenStyles.Widthtwo}>
                        <Text style={BusSeatScreenStyles.Selectedtext}>{t("Book_for")}</Text>
                        <Text style={BusSeatScreenStyles.SelectedSeattext}><IconFA name="rupee" color={Colors.black_text_color} size={SF(14)} /> {detailsStore.MainPrice}</Text>
                    </View>
                    <View style={BusSeatScreenStyles.Widththree}>
                        <Button title={t('Proceed')} ButtonStyle={BusSeatScreenStyles.ButtonStyle} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
                    </View>
                </View>
            </View>
        </View >
    );
};
export default BusSeatScreen;