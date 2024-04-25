// import Skeleton from "react-native-reanimated-skeleton";
import { Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Style, BusListScreenStyle, BusSeatScreenStyle } from '../../styles';
import React, { useMemo, useState } from "react";
import IconA from "react-native-vector-icons/AntDesign";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { SH, SF, SW, Colors } from "../../utils";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


export default function PlaceholderSkeleton(props) {
    const { Colors } = useTheme();
    const BusListScreenStyles = useMemo(() => BusListScreenStyle(Colors), [Colors]);
    const Styless = useMemo(() => Style(Colors), [Colors]);
    return (
        <SkeletonPlaceholder style={{flex:1,borderRadius:10}}>
             <View style={[BusListScreenStyles.BusBoxWraper, { height: 200, padding: 15}]} >
              <View style={[BusListScreenStyles.BusdataTopBox, { height: '40%' }]}>
                <View style={{ width: '50%' }}>
                  <Text style={BusListScreenStyles.TravelCompanyText}>2</Text>
                  <View style={{ backgroundColor: '#dbdad5', borderRadius: 10, justifyContent: 'center', padding: 5, alignItems: 'center', maxWidth: '60%' }}>
                    <Text style={BusListScreenStyles.AcNonAcText}>1</Text>
                  </View>
                </View>
                <View style={[BusListScreenStyles.TextrightSet, { justifyContent: 'center', alignItems: 'flex-end' }]}>
                  <View style={{ marginBottom: 25 }}>
                    {/* <IconA name="arrowright" size={SF(15)} color={Colors.black_text_color} /> */}
                  </View>
                  <Text style={BusListScreenStyles.AcNonAcText}>2</Text>
                </View>
              </View>
              <View style={[BusListScreenStyles.BusdataTopBox, { height: '25%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }]}>
                <Text style={BusListScreenStyles.AcNonAcText}>مشهد 
                {/* <IconA name="arrowright" size={SF(15)} color={Colors.black_text_color} />  */}
                تهران</Text>
      
                <Text style={[BusListScreenStyles.AcNonAcText, { color: 'gray' }]}> پایانه تست    پایانه 2</Text>
              </View>
              <View style={[BusListScreenStyles.LinkBox, { height: '35%' }]}>
                <Text style={BusListScreenStyles.BusComonStyle}> باقیمانده</Text>
      
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={BusListScreenStyles.MainPriceText}>
      
                    1  </Text>
                  <Text style={[BusListScreenStyles.MainPriceText, { color: 'gray', marginHorizontal: 5 }]}>ریال</Text>
                </View>
              </View>
            </View>
    
      
      </SkeletonPlaceholder>
    )
}