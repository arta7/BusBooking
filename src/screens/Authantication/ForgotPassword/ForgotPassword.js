import React, { useState, useMemo } from "react";
import { Text, View, ScrollView } from "react-native";
import { Login } from '../../../styles';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Button, ConfirmationAlert, Spacing, AppHeader, Input } from '../../../components';
import { SH, SF, SW, Colors } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../../routes";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { Colors } = useTheme();
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [email, setEmail] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');

  var alertdata = {
    'logout': t("Email_Successfull"),
  }
  const onoknutton = () => {
    okbutton;
  }

  return (
    <View style={Logins.MainView}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ContentContainerStyle={Logins.MainViewForgotPassword}>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname={true} headerTitle={t("Forget_Password")} />
        <View style={Logins.TabMinView}>
          <View>
            <View>
              <View style={Logins.InputUnderLine}>
                <View>
                  <IconM style={Logins.Marginright} name="email" size={SF(25)} />
                </View>
                <Input
                  placeholder={t("Enter_Email")}
                  inputStyle={Logins.InputTextStyle}
                  onChangeText={(e) => setEmail(e)}
                  keyboardType={'email-address'}
                  value={email}
                />
              </View>
              <Spacing space={SH(20)} />
              <Text style={Logins.SeTextStyleForget}><Text style={Logins.StarColor}> * </Text> {t("We_Well_Sand_Message")}</Text>
              <Spacing space={SH(20)} />
              <Button onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
                Setokbutton('');
              }} title={t("Submitbutton")} />
              <ConfirmationAlert
                message={alertMessage}
                ButtonMinView={Logins.CenterButton}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                iconVisible={true}
                buttonText={t("Ok")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View >
  );
};
export default ForgotPassword;