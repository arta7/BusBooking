import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "../../utils";

const AddRemove = (props) => {
    const { DefaultStyle, Textstyles, CommonStyle } = props;
    const [total, setTotal] = useState(0)
    const increase = () => {
        setTotal(total + 1)
    }
    const decrease = () => {
        if(total-1 <0)
        setTotal(0)
    else
        setTotal(total - 1)
    }
    return (
        <View style={CommonStyle}>
            <TouchableOpacity onPress={() => increase()}>
                <Icon name="pluscircleo" style={DefaultStyle} />
            </TouchableOpacity>
            <Text style={Textstyles} >{total}</Text>
            <TouchableOpacity onPress={() => decrease()}>
                <Icon name="minuscircleo" style={DefaultStyle} />
            </TouchableOpacity>
           
            
        </View>
    )
}
export default AddRemove;