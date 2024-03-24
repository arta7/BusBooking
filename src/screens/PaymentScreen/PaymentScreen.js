import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { PaymentStyle, Style } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../../index';
import { RouteName } from '../../routes';
import { useSelector } from "react-redux";
import { SF, Colors, Paymentdata } from "../../utils";
import { AppHeader, Container, Spacing } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const MangePaymentMethode = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const [show, setShow] = useState(null);
  const toggleHandler = (id) => {
    (id === show) ? setShow(null) : setShow(id)
  };
  const ItemRender = (item, index) => {
    return (
      <TouchableOpacity onPress={() => toggleHandler(item.id)}>
        <View>
          <View style={PaymentStyles.SetFlexRowArrowLeftThree}>
            <View style={PaymentStyles.FlexRowCreditCard}>
              <View style={PaymentStyles.IconSetBorderWidth}>
                <Image source={item.image} resizeMode='center' style={PaymentStyles.SetbgImage} />
              </View>
              <View style={PaymentStyles.SetTextWidth}>
                <Text style={PaymentStyles.CreditCardText}>{t(item.smalltext)}</Text>
                <Text style={PaymentStyles.YouNeedsText}>{t(item.paymentparegraph)}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => toggleHandler(item.id)}>
                {show === item.id ? <Icon name='up' size={SF(21)} /> : <Icon name='down' size={SF(21)} />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {show === item.id ? <View>
          <View style={PaymentStyles.SetParegraphViewStyle}>
            <Text style={PaymentStyles.ParegraphTextStyleset}>{t("Super_is_India")}</Text>
          </View>
        </View> : null}
      </TouchableOpacity>
    );
  }
  return (
    <Container>
      <Spacing />
      <AppHeader headerTitle={t("Payment")} Iconname={true} onPress={() => navigation.replace(RouteName.BUS_SEAT_SCREEN)} />
      <View style={PaymentStyles.MinStyleViewPhotograpgy}>
        <ScrollView style={Styles.ContentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={PaymentStyles.MinFlexView}>
              <View style={PaymentStyles.MinViewSigninScreen}>
                <View>
                  <Text style={PaymentStyles.CardTextStyle}>{t("Card")}</Text>
                  <TouchableOpacity style={PaymentStyles.SetFlexRowArrowLeft} onPress={() => navigation.replace(RouteName.CREDIT_CARD_SCREEN)}>
                    <View style={PaymentStyles.FlexRowCreditCard}>
                      <View style={PaymentStyles.IconSetBorderWidth}>
                        <Icon name="creditcard" size={SF(25)} color={Colors.gray_text_color} />
                      </View>
                      <Text style={PaymentStyles.CreditCardText}>{t("Creadit_Debit_ATM_Cards")}</Text>
                    </View>
                    <View>
                      <Icon name="right" size={SF(21)} olor={Colors.gray_text_color} />
                    </View>
                  </TouchableOpacity>
                  <View style={PaymentStyles.SetFlexRowArrowLeftTwo}>
                  </View>

                  <TouchableOpacity style={[PaymentStyles.FlexRowCreditCardTwo, PaymentStyles.BottomBorder]} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <View style={PaymentStyles.IconSetBorderWidth}>
                      <Image source={images.paypal} resizeMode='center' style={PaymentStyles.SetbgImage} />
                    </View>
                    <Text style={PaymentStyles.CreditCardText}>{t("Paypal")}</Text>
                  </TouchableOpacity>

                  <Text style={[PaymentStyles.CardTextStyleTwo, { color: colorrdata }]}>{t("UPI")}</Text>
                  <TouchableOpacity style={PaymentStyles.FlexRowCreditCardTwo} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <View style={PaymentStyles.IconSetBorderWidth}>
                      <Image source={images.Upi} resizeMode='center' style={PaymentStyles.SetbgImage} />
                    </View>
                    <Text style={PaymentStyles.CreditCardText}>{t("UPI")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={PaymentStyles.FlexRowCreditCardTwo} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <View style={PaymentStyles.IconSetBorderWidth}>
                      <Image source={images.Google_pay} resizeMode='center' style={PaymentStyles.SetbgImage} />
                    </View>
                    <Text style={PaymentStyles.CreditCardText}>{t("Google_Pay")}</Text>
                  </TouchableOpacity>

                  <Text style={[PaymentStyles.CardTextStyleThree, { color: colorrdata }]}>{t("Wallets")}</Text>
                  <FlatList
                    data={Paymentdata}
                    renderItem={({ item, index }) => ItemRender(item, index)}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default MangePaymentMethode;