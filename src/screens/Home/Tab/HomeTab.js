import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { useTranslation } from "react-i18next";
import { SH, SF, SW, Colors, ExclusiveData, Offersdata, Lastlistdata, Fonts } from '../../../utils';
import { DropDown, Button, Spacing, Lottie, DatePicker, AddRemove } from '../../../components';
import IconI from "react-native-vector-icons/Octicons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/EvilIcons";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import { RouteName } from '../../../routes';
import { useTheme } from '@react-navigation/native';
import { FlightFrom } from '../../../utils/Imagedataset';
import DateIcon from "react-native-vector-icons/MaterialIcons";
import UserContext from './../../../../UserContext';
import { useEffect } from 'react';
import { GetCities } from '../../../Api/ApiMaster';
import Loadings from '../../../Loadings'
import Toast from 'react-native-simple-toast';
import images from "../../../index";


// const DataBus = [{ id: 1, name: 'اتوبوس', address: 'HOME_SCREEN',image:images.Bus }, { id: 2, name: 'تاکسی', address: 'ComingSoon',image:images.Taxi},
//      { id: 3, name: 'ون', address: 'ComingSoon',image:images.Van }
//     , { id: 4, name: 'ارسال بار', address: 'ComingSoon',image:images.Van}]


const HomeTab = (props) => {
    const { navigation } = props;
    const { userData, setUserData } = React.useContext(UserContext);
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const [selectedItem, setselectedItem] = useState(1);

    const [DataBusItem, setDataBusItem] = useState([{ id: 1, name: 'اتوبوس', address: 'HOME_SCREEN', images: './../../../images/bus.png' }
        , { id: 2, name: 'تاکسی', address: 'ComingSoon', images: './../../../images/taxi.png' },
    { id: 3, name: 'ون', address: 'ComingSoon', images: './../../../images/van.png' }
        , { id: 4, name: 'ارسال بار', address: 'ComingSoon', images: './../../../images/van.png' }])


    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const [isFocus, setIsFocus] = useState(false);

    const [Loading, setLoading] = useState(false);
    const stateValue = {
        From: "",
        To: "",
    }
    const [value, setValue] = useState(stateValue);

    const [CityList, setCityList] = useState([]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const OnBusTicket = () => {
        navigation.navigate(RouteName.BUS_LIST_SCREEN)
    }


    // const filteredData = DataBusItem?.filter(a => a.id == selectedItem);
    // const imageSource = filteredData && filteredData.length > 0
    //     ? require(filteredData[0].images)
    //     : require('./../../../images/rupayimage.png');

    useEffect(() => {
        // console.log('id  22 : ', DataBusItem.filter(a=>a.id == selectedItem)[0].images)
        const myNextList = [...userData];
        const DatesStep = myNextList;
        DatesStep[0].CurrentDate = new Date().toLocaleDateString();
        setUserData(myNextList)

        setLoading(true)
        if (userData[0]?.Token == "" || userData[0]?.Token == null) {

            setTimeout(() => {
                GetCities(setCityList, CityList, props, setLoading, {
                    headers: {
                        'accept': 'text/plain',
                        "Access-Control-Allow-Origin": "*",
                        'Authorization': userData[0]?.Token
                    }
                })
            }, 4000);

        }
        else {
            GetCities(setCityList, CityList, props, setLoading, {
                headers: {
                    'accept': 'text/plain',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': userData[0]?.Token
                }
            })

        }

    }, [])


    const Offerfunction = (item) => {
        return (
            <View>
                <TouchableOpacity style={HomeTabStyless.MainViewOffers} >
                    <Image resizeMode="cover" style={HomeTabStyless.OffersImg} source={item.image} />
                </TouchableOpacity>
            </View>
        );
    }

    const Exclusivefunction = (item, index) => {
        return (
            <View>
                <TouchableOpacity style={HomeTabStyless.ExclusiveImgWrap} >
                    <Image resizeMode="cover" style={HomeTabStyless.ExclusiveImg} source={item.image} />
                    <View style={HomeTabStyless.OffreView}>
                        <Text style={[HomeTabStyless.KnowMoreText, {}]}>{t("Know_More")}</Text>
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
        <>
            {
                Loading ? <Loadings /> :
                    <ScrollView style={HomeTabStyless.ScrollviewHight}>
                        <View style={{ flex: 1, }}>
                            <FlatList
                                data={DataBusItem}
                                numColumns={4}
                                // style={{marginHorizontal:'0.05%'}}
                                renderItem={({ item, index }) => (


                                    <TouchableOpacity style={{
                                        backgroundColor: selectedItem == item.id ? 'rgba(190,250,206,1)' : '#e6f2ff', borderWidth: 1, width: '25%', borderRadius: 2
                                        , alignItems: 'center', justifyContent: 'center', height: SH(50)
                                    }}
                                        onPress={() => {
                                            setselectedItem(item.id)

                                        }}
                                    >
                                        <Text style={{ textAlign: 'center', fontSize: SF(12), fontFamily: Fonts.Poppins_Italic }}

                                        >
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>



                                )}

                            />

                            <View style={{ width: '100%', height: SH(100), backgroundColor: 'white' }}>
                                <Image source={selectedItem == 1 ? require('./../../../images/bus.png') : selectedItem == 2 
                                ? require('./../../../images/taxi.png') : selectedItem == 3 ? require('./../../../images/van.png') : require('./../../../images/bar.jpg')}

                                 resizeMode={'contain'} style={{ width: '100%', height: '98%', marginTop: '2%' }} />
                            </View>

                        </View>







                        <View style={HomeTabStyless.MainVieBackground}>
                            <Spacing />
                            <View style={HomeTabStyless.SearchBusView}>
                                <View>
                                    <View style={HomeTabStyless.WithFrom}>
                                        {/* <Spacing /> */}
                                        {/* <Text style={HomeTabStyless.FromText}>{t("Fromm")}</Text> */}
                                        <DropDown
                                            data={CityList}
                                            labelField="name_fa"
                                            valueField="name_fa"
                                            placeholder={t("مبدا")}
                                            search={true}
                                            searchPlaceholder={'مبدا'}
                                            // placeholderStyle={{color:'#cb42f5'}}
                                            value={userData[0]?.StartPlace.toString()}
                                            onChange={(From) => {
                                                console.log('from', From.name_fa)
                                                if (From.code.toString() === userData[0]?.EndPlaceCode.toString()) {

                                                    const myNextList = [...userData];
                                                    const DatesStep = myNextList;
                                                    DatesStep[0].EndPlace = '';
                                                    DatesStep[0].EndPlaceCode = '';
                                                    setUserData(myNextList)
                                                }

                                                {
                                                    const myNextList = [...userData];
                                                    const DatesStep = myNextList;
                                                    console.log('From2', From.name_fa.toString())
                                                    DatesStep[0].StartPlace = From.name_fa.toString();
                                                    DatesStep[0].StartPlaceCode = From.code.toString();
                                                    setUserData(myNextList)
                                                }
                                            }}
                                            maxHeight={250}
                                            customeStyle={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, overflow: "hidden", }}
                                            ShowIcon={true}
                                            IconName='place'
                                            dropdownStyle={{ backgroundColor: 'rgba(190,250,206,0.5)' }}
                                            dropdownStyle2={{ backgroundColor: 'rgba(190,250,206,0.5)' }}
                                        />
                                    </View>

                                    <View style={HomeTabStyless.WithFrom}>
                                        {/* <Spacing space={SH(10)} /> */}
                                        {/* <Text style={HomeTabStyless.ToText}>{t("To")}</Text> */}
                                        {/* <Spacing /> */}
                                        <DropDown
                                            data={CityList}
                                            labelField="name_fa"
                                            valueField="name_fa"
                                            placeholder={t("مقصد")}
                                            // placeholderStyle={{color:'#f59e42'}}
                                            search={true}
                                            searchPlaceholder={'مقصد'}
                                            value={userData[0]?.EndPlace.toString()}
                                            onChange={(To) => {
                                                console.log('To Address : => ', To)
                                                if (To.code.toString() === userData[0]?.StartPlaceCode.toString()) {

                                                    const myNextList = [...userData];
                                                    const DatesStep = myNextList;
                                                    DatesStep[0].StartPlace = '';
                                                    DatesStep[0].StartPlaceCode = '';
                                                    setUserData(myNextList)
                                                }
                                                const myNextList = [...userData];
                                                const DatesStep = myNextList;
                                                DatesStep[0].EndPlace = To.name_fa.toString();
                                                DatesStep[0].EndPlaceCode = To.code.toString();
                                                setUserData(myNextList)
                                                //setIsFocus(true);
                                            }}
                                            maxHeight={250}
                                            customeStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, overflow: "hidden", }}
                                            ShowIcon={true}
                                            IconName='place'
                                            dropdownStyle={{ backgroundColor: 'rgba(190,240,250,0.5)' }}
                                            dropdownStyle2={{ backgroundColor: 'rgba(190,240,250,0.5)' }}
                                        // dropdownStyle={{ backgroundColor:'#bef0fa',}}
                                        />
                                    </View>
                                </View>

                                <Spacing />
                                <View style={[{
                                    width: '100%', borderWidth: 0.4, borderColor: 'grey'
                                    , borderRadius: SH(8)
                                    , flexDirection: 'row', justifyContent: 'space-between', height: 70
                                }]}>
                                    <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>

                                        <DateIcon name='date-range' color={'gray'} size={SH(25)} />

                                    </View>
                                    <TouchableOpacity style={{ width: '85%', justifyContent: 'center', alignItems: 'flex-start' }}
                                        onPress={() => { setDatePickerVisibility(true) }}>
                                        <DatePicker
                                            DatePlaceholder={t("Select_Date")}
                                            isDatePickerVisible={isDatePickerVisible}
                                            setDatePickerVisibility={setDatePickerVisibility}
                                            setDataValue={setUserData}
                                            DateValue={userData}
                                        // onPressButton={()=>{setDatePickerVisibility(true)}}
                                        />
                                    </TouchableOpacity>

                                </View>
                                <TouchableOpacity style={{
                                    width: 50, height: 50, backgroundColor: '#bfdaf7', position: 'absolute'
                                    , justifyContent: 'center', alignItems: 'center', borderRadius: 5, top: '20%', right: '15%'
                                }}

                                    onPress={() => {


                                        var StartData = userData[0].StartPlace;
                                        var StartDataCode = userData[0].StartPlaceCode;
                                        var EndData = userData[0].EndPlace;
                                        var EndDataCode = userData[0].EndPlaceCode;

                                        const myNextList = [...userData];
                                        const DatesStep = myNextList;
                                        DatesStep[0].EndPlace = StartData;
                                        DatesStep[0].EndPlaceCode = StartDataCode;
                                        DatesStep[0].StartPlace = EndData;
                                        DatesStep[0].StartPlaceCode = EndDataCode;
                                        setUserData(myNextList)

                                    }}
                                >

                                    <IconI name="arrow-switch" size={30} color={'white'} style={{ justifyContent: 'center', alignItems: 'center' }} />
                                </TouchableOpacity>

                                {/* <TouchableOpacity style={{width:50,height:50,backgroundColor:'#bfdaf7',position:'absolute'
                                ,justifyContent:'center',alignItems:'center',borderRadius:5,top:'20%',right:'30%'}}
                                
                                onPress={()=>{
                                    setLoading(true)
                                    GetCities(setCityList, CityList, props,setLoading,{
                                        headers:{
                                          'accept': 'text/plain',
                                            "Access-Control-Allow-Origin": "*",
                                             'Authorization' :  userData[0]?.Token
                                        }
                                    })
                                }}
                                >

                            <IconFA name="refresh" size={40} color={'white'} style={{justifyContent:'center',alignItems:'center'}} />
                            </TouchableOpacity> */}
                                <Spacing />
                                <Spacing space={SH(20)} />
                                <Button title={'جستجوی '  +   (selectedItem == 1 ? 'اتوبوس' : selectedItem == 2 ? 'تاکسی'  : selectedItem == 3 ? 'ون' : 'ارسال بار')}   onPress={() => {
                                    if (userData[0].StartPlace != "" && userData[0].EndPlace != "")
                                        OnBusTicket()
                                    else {
                                        Toast.showWithGravity('لطفا کلیه گزینه ها را انتخاب کنید', Toast.LONG, Toast.CENTER);
                                    }

                                }} />
                            </View>
                            <Spacing space={SH(30)} />
                            {/* <Text style={HomeTabStyless.OffersText}>{t("OFFERS")}</Text> */}
                            <Spacing space={SH(12)} />
                            {/* <FlatList
                            data={Offersdata}
                            renderItem={({ item, index }) => Offerfunction(item, index)}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        /> */}
                            {/* <Spacing space={SH(30)} /> */}
                            {/* <View style={HomeTabStyless.BorderView}>
                        </View> */}
                            {/* <Spacing space={SH(20)} /> */}
                            {/* <View>
                            <Text style={HomeTabStyless.OffersText}>{t("WHATS_NEW")}</Text>
                            <Text>{t("Discover_new")}</Text>
                        </View> */}
                            {/* <Spacing space={SH(12)} /> */}
                            {/* <FlatList
                            data={ExclusiveData}
                            renderItem={({ item, index }) => Exclusivefunction(item, index)}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        /> */}
                            {/* <Spacing space={SH(30)} /> */}
                            {/* <View style={HomeTabStyless.BorderView}>
                        </View> */}
                            {/* <Spacing space={SH(20)} /> */}
                            {/* <View>
                            <Text style={HomeTabStyless.MainText}>{t("PREFER_TO_TRAVEL")}</Text>
                            <Spacing space={SH(6)} />
                            <Text style={HomeTabStyless.SmallText}>{t("Book_your_bus_on")}</Text>
                        </View> */}
                            <Spacing space={SH(8)} />
                            {/* <FlatList
                            data={Lastlistdata}
                            renderItem={({ item, index }) => Lastlist(item, index)}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={HomeTabStyless.SetFlex}
                        /> */}
                            {/* <Image source={images.Mapimage} style={{width:'100%',height: SH(300),}} resizeMode='contain' /> */}
                        </View>

                    </ScrollView>
            }
        </>
    );
};
export default HomeTab;