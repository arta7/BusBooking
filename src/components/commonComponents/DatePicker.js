import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { DatePickerStyle } from '../../styles';
import moment from 'moment';
import { SH, SF, SW, Colors } from '../../utils';

function DatePicker(props) {
    const { DatePlaceholder } = props;
    const [dateselcet, setdateselcet] = useState(DatePlaceholder);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDatePicked = (date) => {
        hideDateTimePicker(),
            setdateselcet(moment(date, "YYYY-MM-DDTHH:mm:ss Z").local().format('DD-MM-YYYY'));
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => showDateTimePicker()}>
                    <Text style={DatePickerStyle.datetextstyles}>{dateselcet}</Text>
                </TouchableOpacity>
            </View>
            <DateTimePicker
                isVisible={isDatePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
            />
        </View>
    )
}
export default DatePicker;