import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { DatePickerStyle } from '../../styles';
// import moment from 'moment';
var moment = require('moment-jalaali')
import { SH, SF, SW, Colors } from '../../utils';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';

function DatePicker(props) {
    const { DatePlaceholder,isDatePickerVisible,setDatePickerVisibility,onPressButton  } = props;
    const [dateselcet, setdateselcet] = useState('');
    // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
        <View >
            <View>
                <View >
                    <Text style={[DatePickerStyle.datetextstyles,{color:dateselcet == '' ? 'gray': 'black'}]} >{dateselcet == '' ? 'تاریخ' : 
                   moment(new Date(dateselcet.toString())).format('jYYYY/jMM/jDD')
                }
                    </Text>
                </View>
            </View>
                <Modal visible={isDatePickerVisible}>
            <PersianCalendarPicker
            
          onDateChange={handleDatePicked}
        
				/>
                </Modal>
        </View>
    )
}
export default DatePicker;