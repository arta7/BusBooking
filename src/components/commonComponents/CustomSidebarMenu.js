import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import IconE from 'react-native-vector-icons/Feather';
import IconL from 'react-native-vector-icons/Entypo';
import IconG from 'react-native-vector-icons/Ionicons';
import IconZ from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/FontAwesome5';
import { Sidemenu } from '../../styles';
import IconU from 'react-native-vector-icons/FontAwesome';
import { RouteName } from '../../routes';
import IconP from 'react-native-vector-icons/AntDesign';
import { ConfirmationAlert } from '../../components';
import { SH, SF, SW, Colors } from '../../utils';
import { useTranslation } from "react-i18next";

const CustomSidebarMenu = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState(t("Cancel_Button"));

  var alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
    okbutton;
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <IconE
            size={SF(18)}
            name="home"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Home_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <IconU size={SF(18)} name="user-circle" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Profile_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HELP_SCREEN)
        }>
          <IconF size={SF(18)} name="hands-helping" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Help_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTING_SCREEN)
        }>
          <IconP size={18} name="setting" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Setting_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.FAQ_SCREEN)
        }>
          <IconL size={SF(18)} name="help" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("FAQ_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.REVIEWS_SCREEN)
        }>
          <IconL size={SF(18)} name="star" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Reviews_Screen")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICTION_SCREEN)
        }>
          <IconG size={SF(18)} name="notifications" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Notification_Text")}</Text>
        </TouchableOpacity>
        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
            Setokbutton('');
          }}>
            <IconL name="log-out" color={Colors.theme_background} size={SF(23)} />
            <Text style={Sidemenu.hometextstyle}>{t("Log_Out")}</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={cancelbutton}
          buttonText={t("Ok")}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;