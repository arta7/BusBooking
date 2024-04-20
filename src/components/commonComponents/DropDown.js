import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, SF, SH, SW, Fonts } from '../../utils';
import { useTheme } from '@react-navigation/native';
import PlaceIcon from "react-native-vector-icons/MaterialIcons";


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
    IconName
}) {
    const { Colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    width: width, borderWidth: 0.4, borderColor: 'grey'
                    , borderRadius: SH(8)
                    , flexDirection: 'row', justifyContent: 'space-between', height: 70
                },
                dropdownStyle: {
                    // borderWidth: SH(1),
                    borderColor: Colors.input_border,
                    borderRadius: SH(8),
                    fontSize: SF(14),
                    lineHeight: SF(17),
                    color: Colors.black,
                    fontWeight: '400',
                    padding: SH(5),
                    minHeight: SH(60),
                    width: '90%',
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
        <View style={[styles.container, customeStyle]}>
            <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                {ShowIcon &&
                     <PlaceIcon name={IconName} size={SH(25)}/>  
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
                itemTextStyle={{ color: Colors.Shadow_Color }}
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