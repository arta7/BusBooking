import React, { useMemo } from "react";
import { Text, View, ScrollView, TouchableOpacity, StatusBar, FlatList } from "react-native";
import { Style, BusListScreenStyle } from '../../../styles';
import IconMI from "react-native-vector-icons/MaterialCommunityIcons";
import { RouteName } from "../../../routes";
import { SH, SF, SW, Colors } from "../../../utils";
import { BusFlatlistDataBook } from '../../../utils/Imagedataset';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const BusListScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const DataAction = () => {
    navigation.navigate(RouteName.TICKET_SCREEN)
  }
  const { Colors } = useTheme();
  const BusListScreenStyles = useMemo(() => BusListScreenStyle(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const BusFlatlist = (item, index) => {
    return (
      <TouchableOpacity style={BusListScreenStyles.BusBoxWraper} onPress={() => DataAction(item)}>
        <View style={BusListScreenStyles.BusdataTopBox}>
          <View>
            <Text style={BusListScreenStyles.TravelCompanyText}> <IconMI name="bus" size={SF(24)} color={Colors.Red} /> {t(item.TravelCompany)}</Text>
            <Text style={BusListScreenStyles.FromTmeText}>{t("From")}</Text>
          </View>
          <View style={BusListScreenStyles.TextrightSet}>
            <Text style={BusListScreenStyles.DateTextSmall}>{t(item.BusType)}</Text>
            <Text style={BusListScreenStyles.FromTmeText}>{t("To_London")}</Text>
          </View>
        </View>
        <View style={BusListScreenStyles.BusdataTopBox}>
          <Text style={BusListScreenStyles.BusComonStyleBlue}>{t("Paid")} : {item.DiscountAmount} </Text>
          <Text style={BusListScreenStyles.BusComonStyle}>{item.Date}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={Styles.MinStyleViewPhotograpgyTwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={Styles.ContentContainerStyle}
      >
        <View>
          <View style={Styles.MinViewSigninScreen}>
                <FlatList
                  data={BusFlatlistDataBook}
                  renderItem={({ item, index }) => BusFlatlist(item, index)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  style={BusListScreenStyles.ContentContainerStyle}
                />
          </View>
        </View>
      </ScrollView >
    </View >
  );
};
export default BusListScreen;