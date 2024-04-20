import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { useTranslation } from "react-i18next";
import { SH, SF, SW, Colors, ExclusiveData, Offersdata, Lastlistdata } from '../../../utils';
import { DropDown, Button, Spacing, Lottie, DatePicker, AddRemove } from '../../../components';
import IconI from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import { FlightFrom } from '../../../utils/Imagedataset';


const HomeTab = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const [isFocus, setIsFocus] = useState(false);

    const stateValue = {
        From: "",
        To: "",
    }
    const [value, setValue] = useState(stateValue);


    const OnBusTicket = () => {
        navigation.navigate(RouteName.BUS_LIST_SCREEN)
    }

    const Offerfunction = (item) => {
        return (
            <View>
                <TouchableOpacity style={HomeTabStyless.MainViewOffers} onPress={() => OnBusTicket()}>
                    <Image resizeMode="cover" style={HomeTabStyless.OffersImg} source={item.image} />
                </TouchableOpacity>
            </View>
        );
    }

    const Exclusivefunction = (item, index) => {
        return (
            <View>
                <TouchableOpacity style={HomeTabStyless.ExclusiveImgWrap} onPress={() => OnBusTicket()}>
                    <Image resizeMode="cover" style={HomeTabStyless.ExclusiveImg} source={item.image} />
                    <View style={HomeTabStyless.OffreView}>
                        <Text style={HomeTabStyless.KnowMoreText}>{t("Know_More")}</Text>
                        <IconA name="arrowright" style={HomeTabStyless.KnowMoreIcon} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    const Lastlist = (item) => {
        return (
            <TouchableOpacity style={HomeTabStyless.FlexCenterViewTWO} onPress={() => OnBusTicket()}>
                <View style={HomeTabStyless.WidtSetNew}>
                    <View>
                        <View style={HomeTabStyless.ImageCenterStyle}>
                            <Lottie source={item.image} Lottiewidthstyle={HomeTabStyless.LottieImageStyle} />
                        </View>
                        <View style={HomeTabStyless.TetTwoView}>
                            <Text style={HomeTabStyless.TextSetFood}>{t(item.text)}</Text>
                            <Text style={HomeTabStyless.TextSetFoodtwwo}>{t(item.texttwo)}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView style={HomeTabStyless.ScrollviewHight}>
            <View style={HomeTabStyless.MainVieBackground}>
                <Spacing />
                <View style={HomeTabStyless.SearchBusView}>
                    <View>
                        <View style={HomeTabStyless.WithFrom}>
                            {/* <Spacing /> */}
                            {/* <Text style={HomeTabStyless.FromText}>{t("Fromm")}</Text> */}
                            <DropDown
                                data={FlightFrom}
                                labelField="label"
                                valueField="value"
                                placeholder={t("مبدا")}
                                search={true}
                                searchPlaceholder={'مبدا'}
                                value={t(value.From)}
                                onChange={(From) => {
                                    setValue({ ...value, From: From.value });
                                    setIsFocus(true);
                                }}
                                maxHeight={250}
                                customeStyle={{borderBottomLeftRadius:0,borderBottomRightRadius:0}}
                                ShowIcon={true}
                                IconName='place'
                            />
                        </View>

                        <View style={HomeTabStyless.WithFrom}>
                            {/* <Spacing space={SH(10)} /> */}
                            {/* <Text style={HomeTabStyless.ToText}>{t("To")}</Text> */}
                            {/* <Spacing /> */}
                            <DropDown
                                data={FlightFrom}
                                labelField="label"
                                valueField="value"
                                placeholder={t("مقصد")}
                                search={true}
                                searchPlaceholder={'مقصد'}
                                value={t(value.From)}
                                onChange={(To) => {
                                    console.log('value : ',value.From)
                                    if(To.value == value.From)
                                    {
                                        setValue({ ...value, From: "" });
                                    }
                                    setValue({ ...value, To: To.value });
                                    setIsFocus(true);
                                }}
                                maxHeight={250}
                                customeStyle={{borderTopLeftRadius:0,borderTopRightRadius:0}}
                                ShowIcon={true}
                                IconName='place'
                            />
                        </View>
                    </View>

                    <View style={HomeTabStyless.FlewRow}>
                        <View style={HomeTabStyless.InputUnderLineWidth}>
                            <View style={HomeTabStyless.InputUnderLine}>
                                <DatePicker
                                    DatePlaceholder={t("Select_Date")}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={HomeTabStyless.SelectPersonBox}>
                        <View style={HomeTabStyless.SelectPersonBoxChild}>
                            <IconI name="man" size={SF(20)} color={Colors.black_text_color} />
                            <Text style={HomeTabStyless.Adultstext}>{t("Adults")}</Text>
                            <Text style={HomeTabStyless.AdultstextYears}>{t("12_Years")}</Text>
                            <View style={HomeTabStyless.FlexRow}>
                                <AddRemove
                                    Textstyles={HomeTabStyless.TotalStyle}
                                    DefaultStyle={[HomeTabStyless.IconCommon, { color: Colors.Gray_Colour }]}
                                    CommonStyle={HomeTabStyless.FlexRow}
                                />
                            </View>
                        </View>

                        <View style={HomeTabStyless.SelectPersonBoxChild}>
                            <IconFA name="child" size={SF(20)} color={Colors.black_text_color} />
                            <Text style={HomeTabStyless.Adultstext}>{t("Children")}</Text>
                            <Text style={HomeTabStyless.AdultstextYears}>{t("212years")}</Text>
                            <View style={HomeTabStyless.FlexRow}>
                                <AddRemove
                                    Textstyles={HomeTabStyless.TotalStyle}
                                    DefaultStyle={[HomeTabStyless.IconCommon, { color: Colors.Gray_Colour }]}
                                    CommonStyle={HomeTabStyless.FlexRow}
                                />
                            </View>
                        </View>
                        {/* <View style={HomeTabStyless.SelectPersonBoxChild}>
                            <IconFA5 name="baby" size={SF(20)} color={Colors.black_text_color} />
                            <Text style={HomeTabStyless.Adultstext}>{t("Infants")}</Text>
                            <Text style={HomeTabStyless.AdultstextYears}>{t("02Years")}</Text>
                            <View style={HomeTabStyless.FlexRow}>
                                <AddRemove
                                    Textstyles={HomeTabStyless.TotalStyle}
                                    DefaultStyle={[HomeTabStyless.IconCommon, { color: Colors.Gray_Colour }]}
                                    CommonStyle={HomeTabStyless.FlexRow}
                                />
                            </View>
                        </View> */}
                    </View>
                    <Spacing space={SH(20)} />
                    <Button title={t("Search_Buses")} onPress={() => OnBusTicket()} />
                </View>
                <Spacing space={SH(30)} />
                <Text style={HomeTabStyless.OffersText}>{t("OFFERS")}</Text>
                <Spacing space={SH(12)} />
                <FlatList
                    data={Offersdata}
                    renderItem={({ item, index }) => Offerfunction(item, index)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
                <Spacing space={SH(30)} />
                <View style={HomeTabStyless.BorderView}>
                </View>
                <Spacing space={SH(20)} />
                <View>
                    <Text style={HomeTabStyless.OffersText}>{t("WHATS_NEW")}</Text>
                    <Text>{t("Discover_new")}</Text>
                </View>
                <Spacing space={SH(12)} />
                <FlatList
                    data={ExclusiveData}
                    renderItem={({ item, index }) => Exclusivefunction(item, index)}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
                <Spacing space={SH(30)} />
                <View style={HomeTabStyless.BorderView}>
                </View>
                <Spacing space={SH(20)} />
                <View>
                    <Text style={HomeTabStyless.MainText}>{t("PREFER_TO_TRAVEL")}</Text>
                    <Spacing space={SH(6)} />
                    <Text style={HomeTabStyless.SmallText}>{t("Book_your_bus_on")}</Text>
                </View>
                <Spacing space={SH(8)} />
                <FlatList
                    data={Lastlistdata}
                    renderItem={({ item, index }) => Lastlist(item, index)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={HomeTabStyless.SetFlex}
                />
            </View>
        </ScrollView>
    );
};
export default HomeTab;