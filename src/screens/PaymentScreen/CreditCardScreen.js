import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, TextInput, } from "react-native";
import { Creditcard } from '../../styles';
import { Button, Container, Spacing, AppHeader, Input } from '../../components';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const CreditCardScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [CardNumber, setCardNumber] = useState('');

  const { Colors } = useTheme();
  const CreditcardStyle = useMemo(() => Creditcard(Colors), [Colors]);

  const onChangeText = (text, type) => {
    if (type === 'mobile') setMobileNumber(text);
    if (type === 'password') setPassword(text);
    if (type === 'CvvNumber') setCvvNumber(text);
    if (type === 'CardNumber') setCardNumber(text);
  };
  return (
    <Container>
      <Spacing />
      <AppHeader headerTitle={t("Credit_Card")} Iconname={true} onPress={() => navigation.replace(RouteName.PAYMENT_SCREEN)} />
      <View style={CreditcardStyle.MinStyleViewPhotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ContentContainerStyle={CreditcardStyle.MainViewCreditCard}>
              <View style={CreditcardStyle.MinViewSigninScreen}>
                <View style={CreditcardStyle.SetWidthImage}>
                  <Image source={images.creditcard_img} resizeMode='cover' style={CreditcardStyle.CreditCard} />
                </View>
                <View style={CreditcardStyle.SetStyleInputText}>
                  <Text style={CreditcardStyle.TextStyle}>{t("Name")}</Text>
                  <TextInput
                    placeholder={t("John_Doi")}
                    onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                    style={CreditcardStyle.InputStyle}
                  />
                </View>
                <Text></Text>
                <View style={CreditcardStyle.SetStyleInputText}>
                  <View style={CreditcardStyle.flexrowsetcemera}>
                    <View>
                      <Text style={CreditcardStyle.TextStyle}>{t("Card_Number")}</Text>
                      <TextInput
                        placeholder="8644 4356 8243 8070"
                        keyboardType="numeric"
                        maxLength={16}
                        onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                        style={CreditcardStyle.InputStyle}
                      />
                    </View>
                  </View>
                </View>
                <View style={CreditcardStyle.FlexRowsetInput}>
                  <View style={CreditcardStyle.SetStyleInputTextTwo}>
                    <Text style={CreditcardStyle.TextStyle}>mm/yy</Text>
                    <TextInput
                      placeholder="02/24"
                      onChangeText={(text) => onChangeText(text, 'mobile')}
                      value={mobileNumber}
                      maxLength={4}
                      keyboardType="numeric"
                      style={CreditcardStyle.InputStyle}
                    />
                  </View>
                  <View style={CreditcardStyle.SetStyleInputTextTwo}>
                    <Text style={CreditcardStyle.TextStyle}>cvv</Text>
                    <TextInput
                      placeholder="502"
                      onChangeText={(text) => onChangeText(text, 'CvvNumber')}
                      value={CvvNumber}
                      maxLength={3}
                      keyboardType="numeric"
                      style={CreditcardStyle.InputStyle}
                    />
                  </View>
                </View>
                <View style={CreditcardStyle.SetButtonStyle}>
                  <Button title={t("Pay_with_Card")}
                    onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}
                    buttonTextStyle={CreditcardStyle.SetButtonTextStyle}
                  />
                </View>
              </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default CreditCardScreen;
