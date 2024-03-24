import React, { useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Image } from "react-native";
import { TicketScreenStyle } from '../../styles';
import { Button, Spacing } from '../../components';
import { SH, SF, SW, Colors } from '../../utils';
import images from "../../index";
import { RouteName } from "../../routes";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const TicketScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const TicketScreenStyles = useMemo(() => TicketScreenStyle(Colors), [Colors]);

  return (
    <View style={[TicketScreenStyles.minstyleviewphotograpgy, TicketScreenStyles.bgColorset]}>
      <View style={TicketScreenStyles.setwidthsttyles}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          ContentContainerStyle={TicketScreenStyles.MainViewTicketScreen}>
          <KeyboardAvoidingView enabled>
            <View style={TicketScreenStyles.minflexview}>
              <View style={TicketScreenStyles.MinViewSigninScreen}>
                <Spacing space={SH(70)} />

                <View style={TicketScreenStyles.qrcodescanner}>
                  <View>
                    <Text style={TicketScreenStyles.qrcosetitlestyles}>{t("Baroda_Surat")}</Text>
                    <Image source={images.QR_image} resizeMode={'contain'} style={TicketScreenStyles.imagestyleset} />
                    <Text style={TicketScreenStyles.ticketqrnumber}>( CBCE - 1068-51042 )</Text>
                  </View>
                </View>

                <View>
                  <Spacing space={SH(15)} />
                  <View style={TicketScreenStyles.Flexviewnametitle}>
                    <View>
                      <Text style={TicketScreenStyles.nametextstyles}>{t("Name")}</Text>
                      <Text style={TicketScreenStyles.nametextstylestwo}>{t("Graham_Gooch")}</Text>
                    </View>
                    <View>
                      <Text style={TicketScreenStyles.nametextstyles}>{t("Ticket_No")}</Text>
                      <Text style={TicketScreenStyles.nametextstylestwo}># 82403</Text>
                    </View>
                  </View>
                  <Spacing space={SH(20)} />
                  <View style={TicketScreenStyles.Flexviewnametitle}>
                    <View>
                      <Text style={TicketScreenStyles.nametextstyles}>{t("Date")}</Text>
                      <Text style={TicketScreenStyles.nametextstylestwo}>Jun 17, 2023</Text>
                    </View>
                    <View>
                      <Text style={TicketScreenStyles.nametextstyles}>{t("Destination")}</Text>
                      <Text style={TicketScreenStyles.nametextstylestwo}>{t("Telengana")}</Text>
                    </View>
                  </View>
                  <View>
                    <Spacing space={SH(12)} />
                    <View style={TicketScreenStyles.Flexviewnametitle}>
                      <View>
                        <Text style={TicketScreenStyles.nametextstyles}>{t("Departure")}</Text>
                        <Text style={TicketScreenStyles.nametextstylestwo}>08:00 PM</Text>
                      </View>
                      <View>
                        <Text style={TicketScreenStyles.nametextstyles}>{t("Class")}</Text>
                        <Text style={TicketScreenStyles.nametextstylestwo}>{t("Economy")}</Text>
                      </View>
                    </View>
                  </View>
                  <Spacing space={SH(17)} />
                  <View style={TicketScreenStyles.Flexviewnametitle}>
                    <View>
                      <Text style={TicketScreenStyles.nametextstyles}>{t("Seat")}</Text>
                      <Text style={TicketScreenStyles.nametextstylestwo}>18</Text>
                    </View>
                    <View>
                      <Text style={TicketScreenStyles.nametextstyles}>{t("Ticket_Price")}</Text>
                      <Text style={TicketScreenStyles.nametextstylestwo}>₹ 370.00</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={TicketScreenStyles.Buttonviewset}>
          <Button onPress={() => navigation.navigate(RouteName.HOME_TAB)} title={t("Download_Ticket")} />
        </View>
      </View>
    </View >
  );
};
export default TicketScreen;