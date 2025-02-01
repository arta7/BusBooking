import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH, SF, SW, Colors } from '../../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";
import { LoginAPI } from '../../../Api/ApiMaster';
import UserContext from './../../../../UserContext';
import Loadings from '../../../Loadings'
import LoadingDots from "react-native-loading-dots";
const LoginScreen = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');
    const { userData, setUserData } = React.useContext(UserContext);
    const [Loading, setLoading] = useState(false);

    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }


    const LoginPersons = () => {
        setLoading(true)
        LoginAPI(mobileNumber, navigation, userData, setUserData, setLoading)
    }

    return (
        <Container>
            <View style={Logins.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    ContentContainerStyle={Logins.MainViewForgotPassword}>
                    <View style={Logins.Container}>
                        <View style={Styles.MinViewContent}>
                            <View>
                                <Image style={Logins.ImageSet} resizeMode='contain' source={images.App_logo} />
                            </View>
                            <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.InputSpaceView}>
                                <Input
                                    placeholder={t("Mobile_Number")}
                                    onChangeText={(value) => setMobileNumber(value)}
                                    value={mobileNumber}
                                    inputType="numeric"
                                    maxLength={11}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            {/* <View style={Styles.FlexRowPassword}>
                                <TextInput
                                    style={Styles.InputPassword}
                                    name="password"
                                    value={TextInputPassword}
                                    placeholder={t("Password_Text")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={Colors.gray_text_color}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(text) => setTextInputPassword(text)}
                                />
                                <TouchableOpacity onPress={() => { onChangeText("TextInputPassword") }}>
                                    <IconG name={passwordVisibility ? 'eye-off' : 'eye'} size={SF(25)} />
                                </TouchableOpacity>
                            </View> */}
                            <Spacing space={SH(10)} />
                            {/* <View style={Logins.ViewTextStyle}>
                                <Text style={Logins.TextStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View> */}
                            <Spacing space={SH(20)} />
                            {Loading ? <LoadingDots /> :
                                <View style={Logins.LoginButton}>

                                    <Button
                                        title={t("Login_Text")}
                                        onPress={() => {
                                            LoginPersons()
                                        }
                                            // navigation.navigate(RouteName.OTP_VERYFY_SCREEN)
                                        }
                                    />

                                </View>
                            }
                            <Spacing space={SH(10)} />
                            {/* <TouchableOpacity onPress={() => navigation.navigate(RouteName.FORGOT_PASSWORD)}>
                                <Text style={Logins.ForgetPasswordStyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default LoginScreen;