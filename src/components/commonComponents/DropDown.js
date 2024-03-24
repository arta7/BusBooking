import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, SF, SH, SW, Fonts } from '../../utils';
import { useTheme } from '@react-navigation/native';

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
    dropdownStyle
}) {
    const { Colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: { width: width },
                dropdownStyle: {
                    borderWidth: SH(1),
                    borderColor: Colors.input_border,
                    borderRadius: SH(8),
                    fontSize: SF(14),
                    lineHeight: SF(17),
                    color: Colors.black,
                    fontWeight: '400',
                    padding: SH(5),
                    minHeight: SH(60),
                    ...dropdownStyle
                },
                icon: {
                    marginRight: 5,
                },
                label: {
                    position: 'absolute',
                    backgroundColor: Colors.White_Colour,
                    paddingHorizontal: 8,
                    fontSize: SF(20),
                    color: Colors.Gray_Colour,
                    ...labelStyle
                },
                placeholderStyle: {
                    fontSize: SF(18),
                    lineHeight: SF(21),
                    color: Colors.Gray_Colour,
                    ...placeholderStyle
                },
                selectedTextStyle: {
                    fontSize: SF(18),
                    ...selectedTextStyle
                },
                iconStyle: {
                    width: SW(20),
                    height: SH(20),
                },
                inputSearchStyle: {
                    color: Colors.Shadow_Color
                }
            }),
        [dropdownStyle, labelStyle, placeholder, selectedTextStyle]
    )

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle, { color: Colors.Shadow_Color }]}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search={search}
                searchPlaceholder={searchPlaceholder}
                maxHeight={maxHeight}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                itemTextStyle={{ color: Colors.Shadow_Color }}
            />
        </View>
    );
};

export default DropdownComponent;