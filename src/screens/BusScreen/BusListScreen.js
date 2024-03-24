import React, { useMemo } from "react";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Style, BusListScreenStyle } from '../../styles';
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

const BusListScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const BusListScreenStyles = useMemo(() => BusListScreenStyle(Colors), [Colors]);
  const Styless = useMemo(() => Style(Colors), [Colors]);

  const DataAction = (data) => {
    dispatch(get_data_action(data))
    navigation.navigate(RouteName.BUS_SEAT_SCREEN)
  }
  const dispatch = useDispatch();

  const MobileSelect = (item, index) => {
    return (
      <View style={BusListScreenStyles.FlightsCityBox}>
        <View style={BusListScreenStyles.BackArrowBoxWidthSet}>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
            <IconA name="arrowleft" size={SF(20)} color={Colors.theme_background} />
          </TouchableOpacity>
        </View>
        <View style={BusListScreenStyles.CityMainBoxWrap}>
          <View style={BusListScreenStyles.CityMainBox}>
            <Text style={BusListScreenStyles.CityText}>{t(item.Cityfrom)} <IconA name="arrowright" size={SF(15)} color={Colors.black_text_color} /> {t(item.Cityto)}</Text>
            <Text style={BusListScreenStyles.RchSubheadTextStyle}>{item.CardType}</Text>
          </View>
        </View>
      </View>
    )
  }

  const BusFlatlist = (item, index) => {
    return (
      <TouchableOpacity style={BusListScreenStyles.BusBoxWraper} onPress={() => DataAction(item)}>
        <View style={BusListScreenStyles.BusdataTopBox}>
          <View>
            <Text style={BusListScreenStyles.TravelCompanyText}>{t(item.TravelCompany)}</Text>
            <Text style={BusListScreenStyles.AcNonAcText}>{t(item.AcNonAc)}</Text>
          </View>
          <View style={BusListScreenStyles.TextrightSet}>
            <Text style={BusListScreenStyles.MainPriceText}><IconFA name="rupee" color={Colors.black_text_color} size={SF(16)} /> {item.MainPrice}</Text>
            <Text style={BusListScreenStyles.DiscountAmountText}><IconFA name="rupee" color={Colors.light_gray_text_color} size={SF(12)} /> {item.DiscountAmount}</Text>
            <Text style={BusListScreenStyles.PercentaText}><IconMI name="brightness-percent" style={BusListScreenStyles.Percentaticon} /> {t(item.Off)}</Text>
          </View>
        </View>
        <View style={BusListScreenStyles.BusdataTopBox}>
          <Text style={BusListScreenStyles.BusComonStyle}>{t(item.SeatAvl)}</Text>
          <Text style={BusListScreenStyles.BusComonStyle}>{item.TravelTime}</Text>
          <Text style={BusListScreenStyles.BusComonStyle}>{item.FromTme}</Text>
        </View>
        <View style={BusListScreenStyles.LinkBox}>
          <View style={BusListScreenStyles.RatingBox}>
            <Text style={BusListScreenStyles.RatingText}>{item.rating}</Text>
          </View>
          <Text style={BusListScreenStyles.LinkBoxtext}>{t(item.ratingCount)}</Text>
          <Text style={BusListScreenStyles.LinkBoxtext}>{t(item.BordandDep)}</Text>
          <Text style={BusListScreenStyles.LinkBoxtext}>{t(item.cancelpolicy)}</Text>
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
                <FlatList
                  data={BusFlatlistData}
                  renderItem={({ item, index }) => BusFlatlist(item, index)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  style={BusListScreenStyles.ContentContainerStyle}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView >
    </View >
  );
};
export default BusListScreen;