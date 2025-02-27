import React, { useState, useMemo, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList, StyleSheet, Linking } from "react-native";
import { BusSeatScreenStyle } from '../../styles';
import { Picker } from '@react-native-picker/picker';
import IconMI from "react-native-vector-icons/MaterialCommunityIcons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import { RouteName } from "../../routes";
import { useSelector } from "react-redux";
import { Button, LikeUnlike } from "../../components";
import { SH, SF, SW, Colors, Fonts } from "../../utils";
import { BusSeatData, MobileSelectData, BusSeatUpperData, BusSeatShowData, busSeat } from '../../utils/Imagedataset';
import { useTranslation } from 'react-i18next';
import { useTheme, useRoute } from '@react-navigation/native';
import BusSeats from "./BusSeats";
import { BusDetails, busPreReserves } from "../../Api/ApiMaster";
import UserContext from './../../../UserContext';
import { height, width } from "react-native-bottom-tab/src/AnimatedTabBar/utils";
import PlaceIcon from "react-native-vector-icons/MaterialIcons";
import PersianDatePicker from 'react-native-persian-date-picker2';
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import Loadings from '../../Loadings'
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';





const schema = yup.object().shape({
    items: yup.array().of(
        yup.object().shape({
            name: yup
                .string()
                .required('نام را وارد کنید'),
            family: yup
                .string()
                .required('نام خانوادگی را وارد کنید'),
            mobile: yup
                .string().min(11, 'شماره موبایل باید 11 عدد باشد')
                .required('شماره موبایل را وارد کنید')

            ,
            // date: yup
            //     .string()
            //     .required('تاریخ تولد را انتخاب کنید'),
            code: yup
                .string().min(10, 'کد ملی باید 10 کاراکتر باشد')
                .required('کد ملی را وارد کنید')

        })
    )
})



// const schema = yup.object().shape({
//     name: yup
//     .string()
//     .required('نام را وارد کنید'),
//     family: yup
//     .string()
//     .required('نام خانوادگی را وارد کنید'),
//     mobile: yup
//     .string()
//     .required('شماره موبایل را وارد کنید')
//     .min(11, 'شماره موبایل باید 11 عدد باشد')
//     ,
//     birthDate: yup
//     .string()
//     .required('تاریخ تولد را انتخاب کنید'),
//     codemelli:yup
//     .string()
//     .required('کد ملی را وارد کنید')
//     .min(10, 'کد ملی باید 10 کاراکتر باشد')
// });


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
    const [ReturnData, setReturnData] = useState(true);
    const [Data, setData] = useState([])
    const [BusPerson, setBusPerson] = useState([])
    const [datePickerVisibility, setDatePickerVisibility] = React.useState({ status: false, id: 0 });

    const [ReturnLinking, setReturnLinking] = useState('')



    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),

        initialValues: {
            // Initial values for the array
            items: BusPerson
            //   name: '', family: '', mobile: '', birthDate: '', codemelli: ''
            // ... other initial items

        },

    });

    const onPressSend = () => {

        {
            var passengers = []
            for (let i = 0; i < BusPerson.length; i++) {
                passengers.push({
                    "firstName": BusPerson[i].name,
                    "lastName": BusPerson[i].family,
                    "nationalIdentification": BusPerson[i].code,
                    "seatNumber": BusPerson[i].chairNumber,
                    "birthDate": BusPerson[i].date,
                    "gender": BusPerson[i].gender
                })

            }
            console.log('passengers', passengers)
            var telephone = { "phoneNumber": BusPerson[0].mobile };
            var contact = { "name": "", "email": "" };
            var clientUserTelephone = { "phoneNumber": BusPerson[0].mobile }
            var clientUserEmail = "";

            busPreReserves(userData[0].RequestNumber, route.params?.data.sourceCode, route.params?.data.busCode, userData[0].Token,
                passengers, route.params?.data.price * BusPerson.length, telephone,
                contact, clientUserTelephone, clientUserEmail, setLoading, {
                headers: {
                    'accept': 'text/plain',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': userData[0]?.Token
                }
            }, setReturnLinking, props)

        }

    };




    let _handleOpenURL = (event) => {
     
        console.log('event.url',event.url.substring(event.url.search('Status')).split('=')[1])
            if (event.url.substring(event.url.search('Status')).split('=')[1] == "OK") {

                navigation.replace(RouteName.BOOKING_TAB)
                alert('پرداخت با موفقیت انجام گردید.')
                
                
            }
            else  
            if (event.url.substring(event.url.search('Status')).split('=')[1] == "NOK") 
                {
                alert('پرداخت با شکست مواجه گردید.')
            }
        
     
    }
    useEffect(() => {
        // console.log('navigation', userData[0])
        setReturnData(false)
        BusDetails(userData[0].RequestNumber, route.params?.data.sourceCode, route.params?.data.busCode,
            userData[0].Token, setLoading, setData, props, setReturnData)


        // console.log('ReturnLinking = > ',ReturnLinking)


        Linking.getInitialURL().then((ev) => {
            console.log('ev url => ', ev);
            if (ev) {
                _handleOpenURL(ev);
            }
        }).catch(err => {
            console.warn('An error occurred', err);
        });
         var  urlListener =  Linking.addEventListener('url', _handleOpenURL);

        return () => {
            urlListener.remove();
          };


    }, [])

    function numberShow(n) {
        return n > 9 ? "" + n : "0" + n;
    }


    const MobileSelect = (item, index) => {
        return (
            <View style={BusSeatScreenStyles.FlightsCityBox}>
                <View style={BusSeatScreenStyles.BackArrowBoxWidthSet}>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.BUS_LIST_SCREEN)}>
                        <IconA name="arrowright" size={SF(20)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                </View>
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
    const onBirthDatePickerConfirm = (objVal, id) => {
        let dataString = objVal.value[0] + '-' + numberShow(objVal.value[1]) + '-' + numberShow(objVal.value[2]);

        const myNextList = [...BusPerson];
        const DatesStep = myNextList;
        console.log('DatesStep', DatesStep)
        const seatToUpdate = DatesStep.filter(a => a.chairNumber == id)
        seatToUpdate[0].date = dataString;
        setBusPerson(myNextList)

        setDatePickerVisibility({ status: false, id: id });
        return true;
    }

    const renderPerson = (item, index) => {
        const itemErrors = errors.items?.[index];
        // const { errors } = control;
        return (
            <View key={index} style={{ width: '100%', height: 'auto', padding: 10, backgroundColor: 'rgba(190,240,250,0.5)', borderRadius: 10, borderWidth: 0.5, marginBottom: '3%' }}
            >
                <View>
                    <Text style={{ color: 'black',  fontSize: SF(12), fontFamily: Fonts.Poppins_Italic }}>مسافر صندلی  {item.chairNumber} :  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center' }}>
                    <View style={{
                        width: '40%', height: 70, color: 'black',
                        marginRight: '2%',
                    }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}

                            name={`items.${index}.name`}
                            // name={`items.${index}.name`}

                            //   error={error}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <TextInput
                                        style={{ height: 50, borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic }}
                                        onChangeText={(text) => {

                                            const myNextList = [...BusPerson];
                                            const DatesStep = myNextList;
                                            console.log('DatesStep', DatesStep)
                                            const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                            seatToUpdate[0].name = text;
                                            setBusPerson(myNextList)
                                            console.log('BusPerson', BusPerson)
                                            onChange(text)
                                        }}
                                        value={value}
                                        // onChangeText={onChange}
                                        mode='outlined'
                                        label={'نام '}
                                        placeholderTextColor={'black'}
                                    />


                                </>

                            )}


                        />
                        {itemErrors?.name && <Text style={{ color: 'red', fontFamily: Fonts.Poppins_Italic  }}>* {itemErrors.name.message}</Text>}
                    </View>
                    <View style={{
                        width: '55%', height: 70, color: 'black',
                    }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            name={`items.${index}.family`}
                            render={({ field: { onChange, value } }) => (

                                <TextInput
                                    style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic  }}
                                    onChangeText={(text) => {
                                        const myNextList = [...BusPerson];
                                        const DatesStep = myNextList;
                                        console.log('DatesStep', DatesStep)
                                        const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                        seatToUpdate[0].family = text;
                                        setBusPerson(myNextList)
                                        console.log('BusPerson', BusPerson)
                                        onChange(text)

                                    }}
                                    value={item.family}
                                    mode='outlined'
                                    label={'نام خانوادگی '}
                                    placeholderTextColor={'black'}
                                />

                            )}

                        />

                        {itemErrors?.family && <Text style={{ color: 'red', fontFamily: Fonts.Poppins_Italic  }}>* {itemErrors.family.message}</Text>}
                    </View>


                </View>



                <View style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}>


                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={{ width: '97%', height: 50, color: 'black', borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic  }}
                                onChangeText={(text) => {
                                    const myNextList = [...BusPerson];
                                    const DatesStep = myNextList;
                                    console.log('DatesStep', DatesStep)
                                    const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                    seatToUpdate[0].mobile = text;
                                    setBusPerson(myNextList)
                                    console.log('BusPerson', BusPerson)
                                    onChange(text)
                                }}
                                mode='outlined'
                                value={item.mobile}
                                label={'شماره موبایل'}
                                placeholderTextColor={'black'}
                                maxLength={11}
                            />
                        )}
                        name={`items.${index}.mobile`}
                    />


                    {itemErrors?.mobile && (<Text style={{ color: 'red', textAlign: 'right', fontFamily: Fonts.Poppins_Italic  }}>* {itemErrors?.mobile.message}</Text>)}


                </View>



                <>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TouchableOpacity style={{ padding: 5, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => { setDatePickerVisibility({ status: true, id: item.chairNumber }) }}>
                                <TextInput
                                    style={{ width: '97%', height: 50, color: 'black', borderRadius: 10, textAlign: 'center', fontFamily: Fonts.Poppins_Italic  }}
                                    onChangeText={(text) => {

                                        onChange(text)
                                    }}
                                    value={item.date}
                                    editable={false}
                                    label={'تاریخ تولد'}
                                    mode='outlined'
                                    placeholderTextColor={'black'}
                                />
                            </TouchableOpacity>
                        )}

                        name={`items.${index}.date`}
                    />
                    {
                        itemErrors?.date && (
                            <Text style={{ color: 'red', textAlign: 'right', fontFamily: Fonts.Poppins_Italic  }}>* {itemErrors.date.message}</Text>
                        )
                    }
                </>




                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, alignItems: 'center' }}>

                    <View style={{ width: '65%', height: 70, marginRight: '2%', }}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}

                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={{ height: 50, color: 'black', borderRadius: 10, textAlign: 'right', fontFamily: Fonts.Poppins_Italic  }}
                                    onChangeText={(text) => {
                                        const myNextList = [...BusPerson];
                                        const DatesStep = myNextList;
                                        const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                        seatToUpdate[0].code = text;
                                        setBusPerson(myNextList)
                                        onChange(text)
                                    }}
                                    value={item.code}
                                    mode='outlined'
                                    label={'کد ملی'}
                                    placeholderTextColor={'black'}
                                    keyboardType="numeric"
                                    maxLength={10}
                                />
                            )}

                            name={`items.${index}.code`}
                        />

                        {
                            itemErrors?.code && (
                                <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
                                <Text style={{ color: 'red', textAlign: 'right', fontFamily: Fonts.Poppins_Italic  }}>* {itemErrors.code.message}</Text>
                                </View>
                            )
                        }

                    </View>

                    <View style={{ width: '30%', height: 50, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
                        <Picker
                            selectedValue={item.gender}
                            mode="dropdown"
                            style={{ width: '100%', height: '100%' }}
                            onValueChange={(itemValue, itemIndex) => {
                                const myNextList = [...BusPerson];
                                const DatesStep = myNextList;
                                const seatToUpdate = DatesStep.filter(a => a.chairNumber == item.chairNumber)
                                seatToUpdate[0].gender = itemValue;
                                setBusPerson(myNextList)
                            }
                            }>
                            <Picker.Item label="آقا" value="2" />
                            <Picker.Item label="خانم" value="3" />
                        </Picker>
                    </View>
                </View>


            </View>
        )
    }

    return (
        <View style={BusSeatScreenStyles.MinFlexView}>
            {
                Loading ?
                    <Loadings />
                    :
                    <>
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
                            {ReturnData ?
                                <>
                                    <View style={{
                                        width: '100%', borderWidth: 1, height: 200, borderRadius: 10, borderColor: 'gray',
                                        marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'rgba(190,240,250,0.5)'
                                    }}>


                                        <View style={{ width: '60%', }}>
                                            <View style={{ width: '100%', height: '60%' }}>

                                            </View>
                                            <View style={{ width: '90%', marginLeft: '10%', height: '40%', alignItems: 'flex-start' }}>
                                                <Text style={{ textAlign: 'center', color: 'black', fontFamily: Fonts.Poppins_Italic , fontWeight: 'bold',  fontSize: SF(12), }}>{route.params?.data.baseCompany}</Text>
                                                <Text style={{ textAlign: 'center', color: 'gray', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12),  }}>{route.params?.data.carType}</Text>
                                            </View>

                                        </View>

                                        <View style={{ height: '100%', borderWidth: 1, backgroundColor: 'black', borderColor: 'gray' }}>

                                        </View>

                                        <View style={{ width: '38%', alignItems: 'flex-start' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', height: '25%' }}>
                                                <PlaceIcon name={'directions-bus'} color={'gray'} size={SH(22)} />
                                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12), }}>{route.params?.data.origin?.terminal != '' ?
                                                    route.params?.data.origin?.terminal : route.params?.data.origin?.cityName}</Text>
                                            </View>


                                            <View style={{ height: '25%' }}>
                                                <Text style={{ textAlign: 'center', color: 'gray', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12), }}>ساعت حرکت</Text>
                                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12), }}>{route.params?.data.timeMove}</Text>
                                            </View>

                                            <View style={{ height: '25%' }}>
                                                <Text style={{ textAlign: 'center', color: 'gray', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12), }}>تاریخ حرکت</Text>
                                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12), }}>{route.params?.data.dateMove}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', height: '25%' }}>
                                                <PlaceIcon name={'place'} color={'gray'} size={SH(22)} />
                                                <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontFamily: Fonts.Poppins_Italic,  fontSize: SF(12), }}>{route.params?.data.destination?.terminal != ''
                                                    ? route.params?.data.destination?.terminal : route.params?.data.destination?.cityName}</Text>
                                            </View>
                                        </View>

                                    </View>



                                    <View style={[{ marginBottom: '3%', borderWidth: 1, paddingBottom: '5%', paddingTop: '5%', borderRadius: 10, borderColor: 'gray',backgroundColor:'rgba(190,240,250,0.5)' }]}>
                                        <View style={[BusSeatScreenStyles.BusSratflatlistbox, {
                                            borderRadius: 10, width: '90%', marginHorizontal: '5%', borderWidth: 0.5, borderColor: 'gray'
                                        }]}>
                                            <FlatList
                                                data={BusSeatShowData}
                                                renderItem={({ item, index }) => BusSeatShowFunction(item, index)}
                                                keyExtractor={item => item.id}
                                                horizontal
                                            />
                                        </View>
                                        <View style={{ borderRadius: 10, marginTop: 5, borderRadius: 10, width: '90%', marginHorizontal: '5%'}}>
                                            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ color: 'black', fontWeight: 'bold',  fontSize: SF(12), fontFamily: Fonts.Poppins_Italic }} >
                                                    جلوی اتوبوس
                                                </Text>
                                                <View style={{ width: '40%', height: 2, backgroundColor: 'black', marginVertical: 5, fontFamily: Fonts.Poppins_Italic }}>

                                                </View>

                                            </View>
                                            <View >
                                                {

                                                    <BusSeats data={Data} setData={setData} BusPerson={BusPerson} setBusPerson={setBusPerson} />
                                                }


                                            </View>
                                        </View>
                                    </View>




                                    <View >
                                        {

                                            <FlatList
                                                data={BusPerson}
                                                renderItem={({ item, index }) => renderPerson(item, index)}
                                                keyExtractor={item => item.id}
                                            />
                                        }

                                    </View>


                                </>
                                :
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: '10%', width: '80%', marginTop: '50%' }}>
                                    <Text style={{ textAlign: 'center', fontSize: SF(12), color: 'black', fontFamily: Fonts.Poppins_Italic }}>دریافت اطلاعات از سمت سرور مرکزی برای این اتوبوس دچار مشکل شده است.</Text>
                                </View>

                            }




                        </ScrollView >


                        <View style={{ marginTop: '5%' }}>

                            <View style={BusSeatScreenStyles.BusFinalBoookedBox}>
                                <View style={BusSeatScreenStyles.Widthone}>
                                    <Text style={[BusSeatScreenStyles.Selectedtext, { color: 'black' }]}>جمع کل قیمت</Text>
                                    <Text style={[BusSeatScreenStyles.SelectedSeattext, { fontFamily: Fonts.Poppins_Italic  }]}>{route.params?.data.price * BusPerson.length} ریال</Text>
                                </View>
                                {/* <View style={BusSeatScreenStyles.Widthtwo}>
                        <Text style={BusSeatScreenStyles.Selectedtext}>{t("Book_for")}</Text>
                        <Text style={BusSeatScreenStyles.SelectedSeattext}><IconFA name="rupee" color={Colors.black_text_color} size={SF(14)} /> 1</Text>
                    </View> */}
                                <View style={BusSeatScreenStyles.Widththree}>
                                    <Button title={t('Proceed')} ButtonStyle={[BusSeatScreenStyles.ButtonStyle, {}]}

                                        onPress={handleSubmit(onPressSend, console.log('error'))}
                                        disable={BusPerson.length == 0 ? true : false}
                                    />
                                </View>
                            </View>
                        </View>
                        <PersianDatePicker
                            visible={datePickerVisibility.status}
                            onConfirm={(obc) => onBirthDatePickerConfirm(obc, datePickerVisibility.id)}
                            startYear={1280}
                            endYear={1403}
                            containerStyle={{ marginHorizontal: 5 }}
                            pickercontainerStyle={{}}
                            pickerWrapperStyle={{ borderWidth: 1, borderRadius: 10, borderColor: 'gray', marginHorizontal: 3 }}
                            pickerItemStyle={{}}
                            submitTextStyle={{}}
                            defaultValue={[1370, 7, 5]}
                        />
                    </>
            }
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
        fontSize: SF(12),
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