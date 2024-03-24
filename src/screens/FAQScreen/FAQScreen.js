import React, { useState, useMemo } from "react";
import { View, ScrollView, KeyboardAvoidingView, Text, FlatList, TouchableOpacity, TextInput, } from "react-native";
import { FAQScreenStyle } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { Input, Spacing } from '../../components';
import { Colors, Faqdataset, SH, SF, SW } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const FAQScreen = () => {
    const { t } = useTranslation();
    const [Search, setSearch] = useState('');

    const { Colors } = useTheme();
    const FAQScreenStyles = useMemo(() => FAQScreenStyle(Colors), [Colors]);

    const Faqdataitem = (item, index) => {
        return (
            <TouchableOpacity style={FAQScreenStyles.BgColorWhite} onPress={() => toggleHandler(item.id)}>
                <View>
                    <View style={FAQScreenStyles.FlexRowArrowLeftThree}>
                        <View style={FAQScreenStyles.FlexRowCreditCard}>
                            <View style={FAQScreenStyles.TextWidth}>
                                <Text style={FAQScreenStyles.CreditCardText}>{t(item.smalltext)}</Text>
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
                    <View style={FAQScreenStyles.ParegraPhViewStyle}>
                        <Text style={FAQScreenStyles.ParegraphTextHelp}>{t(item.paymentparegraph)}</Text>
                    </View>
                </View> : null}
            </TouchableOpacity>
        );
    }
    const [show, setShow] = useState(null);
    const toggleHandler = (id) => {
        (id === show) ? setShow(null) : setShow(id)
    };
    return (
        <View style={FAQScreenStyles.MinViewScreen}>
            <View>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    ContentContainerStyle={FAQScreenStyles.MainViewFAQ}>
                    <KeyboardAvoidingView enabled>
                        <View style={FAQScreenStyles.MinFlexView}>
                            <View style={FAQScreenStyles.MinViewAllContent}>
                                <Spacing space={SH(100)} />
                                <FlatList
                                    data={Faqdataset}
                                    renderItem={({ item, index }) => Faqdataitem(item, index)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <View style={FAQScreenStyles.BgWhiteView}>
                    <View style={FAQScreenStyles.ChangeTheameBgColor}>
                        <TouchableOpacity style={FAQScreenStyles.SetFileChnage}>
                            <View style={FAQScreenStyles.InputWidth}>
                                <Input
                                    placeholder={t("Search_Text")}
                                    onChangeText={(value) => setSearch(value)}
                                    value={Search}
                                    placeholderTextColor={Colors.gray_text_color}
                                    inputStyle={FAQScreenStyles.InputStyles}
                                />
                            </View>
                            <View style={FAQScreenStyles.Iconstyles}>
                                <Icon name="search1" size={SF(20)} color={Colors.theme_background} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default FAQScreen;
