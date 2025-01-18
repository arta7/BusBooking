import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import { DatePickerStyle } from '../../styles';
// import moment from 'moment';
var moment = require('moment-jalaali')
import { SH, SF, SW, Colors, Fonts } from '../../utils';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';

function DatePicker(props) {
    const { DatePlaceholder,isDatePickerVisible,setDatePickerVisibility,DateValue ,setDataValue } = props;
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
           // setdateselcet(date);
            const myNextList = [...DateValue];
            const DatesStep = myNextList;
            DatesStep[0].CurrentDate = date;
            setDataValue(myNextList)
        
    };


    return (
        <View >
            <View>
                <View >
                    <Text style={[DatePickerStyle.datetextstyles,{color:DateValue[0].CurrentDate == '' ? 'gray': 'black'
                    ,fontFamily:Fonts.Poppins_Medium,fontSize:SH(14)}]} >{DateValue[0].CurrentDate == '' ? 'تاریخ' : 
                   moment(new Date(DateValue[0].CurrentDate.toString())).format('jYYYY/jMM/jDD')
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