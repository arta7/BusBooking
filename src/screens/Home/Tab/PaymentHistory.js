import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { PaymentHistoryTabStyle, Style } from '../../../styles';
import images from "../../../index";
import { RouteName } from "../../../routes";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const HistoryTab = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const PaymentHistoryTabStyles = useMemo(() => PaymentHistoryTabStyle(Colors), [Colors]);
    const Styless = useMemo(() => Style(Colors), [Colors]);

    return (
        <View style={[Styless.MinStyleViewPhotograpgyTwo, Styless.bgColorset]}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={Styless.ContentContainerStyle}
            >
                <View style={Styless.minflexview}>
                    <View style={PaymentHistoryTabStyles.ContainerAppointmentWrap}>
                        <View style={PaymentHistoryTabStyles.PaymentBoxwrap}>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View>
                                        <Image source={images.paypal_Icon} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />
                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Paypal")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 9 2022 at 11:00 AM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 390</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.GooglePay} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />
                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Google_Pay")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 8 2022 at 12:00 AM</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 300</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.GooglePay} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Google_Pay")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 8 2022 at 01:00 PM</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 800</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementFaild]}>{t("Failed")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.paypal_Icon} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Paypal")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 7 2022 at 02:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 220</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementPending]}>{t("Pending")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.creditcard_img} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />
                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Card")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 6 2022 at 03:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 420</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.Rupay} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Rupay")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 5 2022 at 04:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 210</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.paypal_Icon} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Paypal")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 1 2022 at 8:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 550</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.GooglePay} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Google_Pay")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 2 2022 at 11:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 120</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.paypal_Icon} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Paypal")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 3 2022 at 05:00 PM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 430</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementPending]}>{t("Pending")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.creditcard_img} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />

                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Card")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 4 2022 at 05:00 AM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 360</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={PaymentHistoryTabStyles.PaymentBoxPerent} onPress={() => navigation.navigate(RouteName.TICKET_SCREEN)}>
                                <View style={PaymentHistoryTabStyles.PaymentBox}>
                                    <View >
                                        <Image source={images.Rupay} style={PaymentHistoryTabStyles.PaymentIcon} resizeMode='contain' />
                                    </View>
                                    <View style={PaymentHistoryTabStyles.payemnttimebox}>
                                        <Text style={PaymentHistoryTabStyles.PayemnttranferheadText}>{t("Rupay")}</Text>
                                        <Text style={PaymentHistoryTabStyles.PaymentTimeText}>Dec, 5 2022 at 8:00 AM</Text>
                                    </View>
                                </View>
                                <View style={PaymentHistoryTabStyles.PaymentAounttextpadright}>
                                    <Text style={PaymentHistoryTabStyles.PaymentAounttext}>  ₹ 530</Text>
                                    <Text style={[PaymentHistoryTabStyles.PayemntStatus, PaymentHistoryTabStyles.PayementSuccess]}>  {t("Successful")}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};
export default HistoryTab;