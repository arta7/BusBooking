import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, SF, SH, SW, Fonts } from '../../utils';
import { useTheme } from '@react-navigation/native';
import PlaceIcon from "react-native-vector-icons/MaterialIcons";
// import { fontConfig } from 'react-native-paper/lib/typescript/styles/fonts';


function DropdownComponent({
    width,
    data,
    labelField,
    valueField,
    placeholder,
    search,
    searchPlaceholder,
    onChange,
    maxHeight,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    dropdownStyle,
    customeStyle,
    ShowIcon,
    IconName,
    dropdownStyle2
}) {
    const { Colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    width: width, borderWidth: 0.4, borderColor: 'grey'
                    , borderRadius: SH(8)
                    , flexDirection: 'row', justifyContent: 'space-between', height: 70, overflow: "hidden",
                },
                dropdownStyle: {
                    // borderWidth: SH(1),
                    borderColor: Colors.input_border,
                    // borderRadius: SH(8),
                    fontSize: SF(12),
                    lineHeight: SF(17),
                    color: Colors.black,
                    fontFamily:Fonts.Poppins_Italic,
                    padding: SH(5),
                    minHeight: SH(60),
                    width: '90%',
                    overflow: "hidden",
                    ...dropdownStyle
                },
                icon: {
                    marginRight: 5,
                },
                label: {
                    position: 'absolute',
                    backgroundColor: Colors.White_Colour,
                    paddingHorizontal: 8,
                    fontSize: SF(12),
                    color: Colors.Gray_Colour,
                    fontFamily:Fonts.Poppins_Italic,
                    ...labelStyle
                },
                placeholderStyle: {
                    fontSize: SF(12),
                    lineHeight: SF(21),
                    color: Colors.Gray_Colour,
                    fontFamily:Fonts.Poppins_Italic,
                    ...placeholderStyle
                },
                selectedTextStyle: {
                    fontSize: SF(12),
                    fontFamily:Fonts.Poppins_Italic,
                    ...selectedTextStyle
                },
                iconStyle: {
                    width: SW(20),
                    height: SH(20),
                },
                inputSearchStyle: {
                    color: Colors.Shadow_Color,
                    fontFamily:Fonts.Poppins_Italic,
                    fontSize: SF(12),
                }
            }),
        [dropdownStyle, labelStyle, placeholder, selectedTextStyle]
    )

    return (
        <View style={[styles.container, customeStyle]}>
            <View style={[dropdownStyle2, {width: '10%', justifyContent: 'center', alignItems: 'center', overflow: "hidden",} ]}>
                {ShowIcon &&
                     <PlaceIcon name={IconName} color={'gray'} size={SH(25)}/>  
                }
            </View>
            <Dropdown
                style={[styles.dropdownStyle]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle, { color: Colors.Shadow_Color }]}
                inputSearchStyle={styles.inputSearchStyle}
                // iconStyle={styles.iconStyle}
                iconColor='transparent'

                data={data}
                search={search}
                searchPlaceholder={searchPlaceholder}
                maxHeight={maxHeight}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                itemTextStyle={{ color: Colors.Shadow_Color,fontFamily:Fonts.Poppins_Italic,fontSize:SF(12) }}
                
            />

            {/* <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={'Choose a fruit.'}
            /> */}
        </View>
    );
};

export default DropdownComponent;