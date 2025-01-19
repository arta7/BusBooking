import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Otpstyle } from '../../../styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import images from '../../../index';
import { RouteName } from '../../../routes';
import { Button, ConfirmationAlert } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import { VerifyAPI } from "../../../Api/ApiMaster";
import UserContext from './../../../../UserContext';
import Loadings from '../../../Loadings'

const OtpScreenset = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Style = useMemo(() => Otpstyle(Colors), [Colors]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [Loading, setLoading] = useState(false);
    const [Code, setCode] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const { userData, setUserData } = React.useContext(UserContext);
    var alertdata = {
        'logout': t("Resend_Otp_Text_Modal"),
        'loginSuccess': t("Login_Successfull"),
    }
    const onoknutton = () => {
        if (okbutton === 1) okbutton;
        if (okbutton === 2) {
            console.log('test')
            // navigation.navigate(RouteName.HOME_SCREEN)
        }

    }

    const verify = (_code) => {
        // console.log('userData[0].Mobile', userData[0].Mobile)
        setLoading(true)
        VerifyAPI(userData[0].Mobile.toString(), _code, navigation,setLoading,userData,setUserData)
    }
    return (
        <ImageBackground source={images.full_bg_img_hospital} resizeMode='cover'>
            <View style={Style.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    ContentContainerStyle={Style.MainViewOtp}>
                    <KeyboardAvoidingView enabled>
                        <View style={Style.MinFlexView}>
                            <View style={Style.MinViewSecond}>
                                <Text style={Style.EnterSixDigitText}>{t("Enter_Six_Digit_OTP")}</Text>
                                <Text style={Style.Paregraph}>{t("Enter_The_Otp_Title")}</Text>
                                <OTPInputView
                                    style={Style.OtpViewStyles}
                                    pinCount={5}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Style.CodeInputStyles}
                                    codeInputHighlightStyle={Style.CodeInputStyles}
                                    onCodeChanged={(code) => {
                                        setCode(code)
                                    }}
                                    onCodeFilled={(code => {
                                        verify(code)
                                    })}

                                />
                                <View style={Style.FlexRowText}>
                                    <Text style={Style.ParegraPhotpBottom}>{t("Didnt_Recevip_Otp")}</Text>
                                    <TouchableOpacity onPress={() => {
                                        Setokbutton(1);
                                    }}>
                                        <Text style={Style.ResendTextBold}>{t("Resend")}</Text>
                                    </TouchableOpacity>
                                </View>
                                {Loading ? <Loadings /> :
                                    <View>
                                        <Button onPress={() => {
                                            verify(Code)
                                        }} title={t("Verify_Text")} />
                                    </View>
                                }
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                {/* <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    ButtonMinView={Style.Buttonotp}
                    iconVisible={true}
                    buttonText={t("Ok")}
                /> */}
            </View>
        </ImageBackground>
    );
};
export default OtpScreenset;