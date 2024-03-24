import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import { ReviewsScreenStyle } from '../../styles';
import { Button, ConfirmationAlert, Lottie, Spacing } from '../../components';
import { Rating } from 'react-native-ratings';
import images from "../../index";
import { RouteName } from "../../routes";
import { SH, SF, SW, Colors } from "../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const ReviewsScreenStyles = useMemo(() => ReviewsScreenStyle(Colors), [Colors]);
  const [text, onChangeText] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');

  var alertdata = {
    'logout': t("Reviews_Submit_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
    okbutton;
  }

  return (
    <View style={ReviewsScreenStyles.MinViewScreenTwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ContentContainerStyle={ReviewsScreenStyles.MainViewReviews}>
        <KeyboardAvoidingView enabled>
          <View>
            <View>
              <View style={ReviewsScreenStyles.MinContentView}>
                <Lottie Lottiewidthstyle={ReviewsScreenStyles.PostionReView} source={images.Reviewsimage_screen} />
                <Text style={ReviewsScreenStyles.AccountTextTwo}>{t("Please_Rate_Bus_Booking")}</Text>
                <View style={ReviewsScreenStyles.FlexRowStarSignup}>
                  <Rating
                    type='custom'
                    ratingColor={Colors.amber_color}
                    ratingBackgroundColor={Colors.chinese_silver}
                    ratingCount={5}
                    tintColor={Colors.white_text_color}
                    imageSize={30}
                    startingValue={3.5}
                    isDisabled={false}
                  />
                </View>
                <Text style={ReviewsScreenStyles.AccountTextSuccessfullyTwo}>{t("Please_OnDemand_Two")}</Text>
                <View style={ReviewsScreenStyles.InputUnderLineReviews}>
                  <TextInput
                    style={ReviewsScreenStyles.PositionStyleInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={t("Reviews_Enter_Your_Commenet")}
                    placeholderTextColor={Colors.gray_text_color}
                  />
                </View>
                <Spacing space={SH(20)} />
                <View style={ReviewsScreenStyles.AccountButton}>
                  <Button onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);
                    Setokbutton('');
                  }} title={t("Reviews_Submit")}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        ButtonMinView={ReviewsScreenStyles.ButtonView}
        iconVisible={true}
        buttonText={t("Ok")}
      />
    </View>
  );
};

export default ReviewsScreen;