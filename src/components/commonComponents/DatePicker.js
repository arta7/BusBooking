import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { DatePickerStyle } from '../../styles';
import moment from 'moment';
import { SH, SF, SW, Colors } from '../../utils';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';

function DatePicker(props) {
    const { DatePlaceholder } = props;
    const [dateselcet, setdateselcet] = useState(new Date().toDateString());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDatePicked = (date) => {
        hideDateTimePicker()
        console.log('date : ',date)
            setdateselcet(date);
    };

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => showDateTimePicker()}>
                    <Text style={DatePickerStyle.datetextstyles}>{dateselcet == null ? 'تاریخ' : dateselcet.toString()}</Text>
                </TouchableOpacity>
            </View>
            {/* <DateTimePicker
                isVisible={isDatePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
            /> */}
                <Modal visible={isDatePickerVisible}>
            <PersianCalendarPicker
            
          onDateChange={handleDatePicked}
        
				/>
                </Modal>
        </View>
    )
}
export default DatePicker;