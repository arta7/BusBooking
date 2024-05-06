import React, { useMemo, useState,useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Style, BusListScreenStyle, BusSeatScreenStyle } from '../../styles';
import IconMI from "react-native-vector-icons/MaterialCommunityIcons";
import IconA from "react-native-vector-icons/AntDesign";
import IconFA from "react-native-vector-icons/FontAwesome";
import { RouteName } from "../../routes";
import { useDispatch } from "react-redux";
import { get_data_action } from '../../redux/action';
import { SH, SF, SW, Colors } from "../../utils";
import { BusFlatlistData, MobileSelectData } from '../../utils/Imagedataset';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
var moment = require('moment-jalaali')
import UserContext from './../../../UserContext';
import PersianConverter from "../../components/Class/PersianConverter";
import PlaceholderSkeleton from "../../components/commonComponents/PlaceholderSkeleton";
import Skeleton from "react-native-reanimated-skeleton";
import { BusSearch } from "../../Api/ApiMaster";
const BusListScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [tabShow, SettabShow] = useState('1');
  const { Colors } = useTheme();
  const BusListScreenStyles = useMemo(() => BusListScreenStyle(Colors), [Colors]);
  const Styless = useMemo(() => Style(Colors), [Colors]);
  const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);
  const { userData, setUserData } = React.useContext(UserContext);


  let options = { year: 'numeric', month: 'long', day: 'numeric' };

  const DataAction = (data) => {
    dispatch(get_data_action(data))
    navigation.navigate(RouteName.BUS_SEAT_SCREEN)

  }



  useEffect(()=>{
    // setTimeout(() => {
    //   const myNextList = [...userData];
    //   const DatesStep = myNextList;
    //   DatesStep[0].isLoading = false;
    //   setUserData(myNextList)
    // }, 5000);
    BusSearch()
},[])


  const dispatch = useDispatch();

  const MobileSelect = (item, index) => {
    

    return (
      <View style={BusListScreenStyles.FlightsCityBox}>
        <View style={[BusListScreenStyles.BackArrowBoxWidthSet, {}]}>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
            <IconA name="arrowright" size={SF(20)} color={Colors.black_text_color} />
          </TouchableOpacity>
        </View>
        <View style={BusListScreenStyles.CityMainBoxWrap}>
          <View style={BusListScreenStyles.CityMainBox}>
            <Text style={BusListScreenStyles.CityText}>بلیط اتوبوس از  {userData[0].StartPlace.toString()} به {userData[0].EndPlace.toString()}</Text>

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingTop: 5 }}>
            <Text style={[BusListScreenStyles.RchSubheadTextStyle, { color: 'gray' }]}
            >{
                PersianConverter(new Date(userData[0].CurrentDate.toString()))
                //moment(new Date(userData[0].CurrentDate.toString())).format('jMMMM jDD dddd')
                // new Date(userData[0].CurrentDate.toString()).toLocaleDateString('fa-IR', options)
              }</Text>
          </View>

        </View>

      </View>
    )
  }

  const BusFlatlist = (item, index) => {
    return (
      <TouchableOpacity style={[BusListScreenStyles.BusBoxWraper, { height: 200, padding: 15 }]} onPress={() => DataAction(item)}>
        <View style={[BusListScreenStyles.BusdataTopBox, { height: '40%' }]}>
          <View style={{ width: '50%' }}>
            <Text style={BusListScreenStyles.TravelCompanyText}>{t(item.TravelCompany)}</Text>
            <View style={{ backgroundColor: '#dbdad5', borderRadius: 10, justifyContent: 'center', padding: 5, alignItems: 'center', maxWidth: '60%' }}>
              <Text style={BusListScreenStyles.AcNonAcText}>{t(item.AcNonAc)}</Text>
            </View>
          </View>





          <View style={[BusListScreenStyles.TextrightSet, { justifyContent: 'center', alignItems: 'flex-end' }]}>
            <View style={{ marginBottom: 25 }}>
              <IconA name="arrowright" size={SF(15)} color={Colors.black_text_color} />
            </View>
            <Text style={BusListScreenStyles.AcNonAcText}>{item.TravelTime}</Text>
          </View>
        </View>
        <View style={[BusListScreenStyles.BusdataTopBox, { height: '25%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }]}>
          <Text style={BusListScreenStyles.AcNonAcText}>مشهد <IconA name="arrowright" size={SF(15)} color={Colors.black_text_color} /> تهران</Text>

          <Text style={[BusListScreenStyles.AcNonAcText, { color: 'gray' }]}> پایانه تست    پایانه 2</Text>
        </View>
        <View style={[BusListScreenStyles.LinkBox, { height: '35%' }]}>
          <Text style={BusListScreenStyles.BusComonStyle}>{t(item.SeatAvl)} باقیمانده</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={BusListScreenStyles.MainPriceText}>

              {item.MainPrice}  </Text>
            <Text style={[BusListScreenStyles.MainPriceText, { color: 'gray', marginHorizontal: 5 }]}>ریال</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styless.MinStyleViewPhotograpgyTwo}>
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
        style={Styless.ContentContainerStyle}
      >
        <View>
          <View style={Styless.MinViewSigninScreen}>
            <View>
              <Text style={BusListScreenStyles.HeadText}>{t("Showing_buses")}</Text>
              <View>
      
              { userData[0].isLoading ? 
              <>
              { BusFlatlistData.map((item)=>
  <PlaceholderSkeleton isLoading={true}/>
              )
            }
            </>
           
              
              :
               <FlatList
                  data={BusFlatlistData}
                  renderItem={({ item, index }) => BusFlatlist(item, index)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  style={BusListScreenStyles.ContentContainerStyle}
                /> 
              }
              </View>
            </View>
          </View>
        </View>


      </ScrollView >
      {/* <View style={[BusSeatScreenStyles.TabBoxTwWidththreeoMin, { height: 60 }]}> */}
      <View style={[BusSeatScreenStyles.TabBoxTwo, { height: 50, borderTopColor: 'gray', borderTopWidth: 0.5, marginHorizontal: 5 }]}>
        <TouchableOpacity style={{
          width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'
          , borderRightWidth: 1, paddingTop: 5, borderRightColor: 'gray', flexDirection: 'row'
        }}>
          <IconA name="right" size={SW(10)} color='black' style={{ marginRight: 5 }} />
          <Text style={{ textAlign: 'center', color: 'black', fontSize: SW(10) }}
            onPress={() => {
              var today = new Date(userData[0].CurrentDate);
              var tomorrow = new Date(today);
              tomorrow.setDate(today.getDate() - 1);
              console.log('new Date(DatesStep[0].CurrentDate)', tomorrow)
              const myNextList = [...userData];
              const DatesStep = myNextList;
              DatesStep[0].CurrentDate = tomorrow;
              setUserData(myNextList)


            }}
          >
            روز قبل
          </Text>

        </TouchableOpacity>


        <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', color: 'black', fontSize: SW(10) }}>
            {moment(new Date(userData[0].CurrentDate.toString())).format('jYYYY/jMM/jDD')}
          </Text>
        </View>


        <TouchableOpacity style={{
          width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'
          , borderLeftWidth: 1, paddingTop: 5, borderLeftColor: 'gray', flexDirection: 'row'
        }}
          onPress={() => {
            var today = new Date(userData[0].CurrentDate);
            var tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            console.log('new Date(DatesStep[0].CurrentDate)', tomorrow)
            const myNextList = [...userData];
            const DatesStep = myNextList;
            DatesStep[0].CurrentDate = tomorrow;
            setUserData(myNextList)


          }}
        >

          <Text style={{ textAlign: 'center', color: 'black', fontSize: SW(10) }}>
            روز بعد
          </Text>

          <IconA name="left" size={SW(10)} color='black' style={{ marginLeft: 5 }} />
        </TouchableOpacity>


        {/* </View> */}


      </View>
    </View >
  );
};
export default BusListScreen;