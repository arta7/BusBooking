import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { NotificationStyle } from '../../styles';
import images from '../../index';
import { Spacing } from '../../components';
import { SH, SF, SW, Colors } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const NotificationScreen = () => {
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const NotificationStyles = useMemo(() => NotificationStyle(Colors), [Colors]);

  return (
    <View style={NotificationStyles.MinViewScreen}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        ContentContainerStyle={NotificationStyles.MainViewNotification}>
        <KeyboardAvoidingView enabled>
          <View style={NotificationStyles.MinFlexView}>
            <View style={NotificationStyles.MinContentView}>
              <Spacing space={SH(20)} />
              <View style={NotificationStyles.FlexDiractionRow}>
                <View>
                  <Image style={NotificationStyles.ImageSet} resizeMode='cover' source={images.offer_one} />
                </View>
                <View style={NotificationStyles.ParegraphWidth}>
                  <Text style={NotificationStyles.TextParegraph}>{t("Notification_Paregraph")}</Text>
                  <Text style={NotificationStyles.TwoNavemBerScreen}>{t("Notification_date")}</Text>
                </View>
              </View>
              <Spacing space={SH(20)} />
              <View style={NotificationStyles.FlexDiractionRow}>
                <View>
                  <Image style={NotificationStyles.ImageSet} resizeMode='cover' source={images.offer_two} />
                </View>
                <View style={NotificationStyles.ParegraphWidthTwo}>
                  <Text style={NotificationStyles.TextParegraph}>{t("Notification_Paregraph_Two")}</Text>
                  <Text style={NotificationStyles.TwoNavemBerScreen}>{t("Notification_Date_Two")}</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
