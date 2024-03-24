import React, { useMemo } from "react";
import { StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { SH, SF, SW, Colors } from '../../utils';

function CheckBoxset(props) {
    const { value, onValueChange, disabled, status, CheckBoxStyle } = props;

    const styles = useMemo(
        () =>
            StyleSheet.create({
                CheckBoxStyle: {
                    height: SH(20),
                    width: SW(20),
                },
            }),
        [CheckBoxStyle, Colors],
    );

    return (
        <CheckBox
            status={status}
            disabled={disabled}
            style={[styles.CheckBoxStyle, { ...CheckBoxStyle }]}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: Colors.theme_background, false: Colors.theme_background }}
        />
    );
};
export default CheckBoxset;