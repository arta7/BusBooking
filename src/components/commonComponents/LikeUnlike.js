import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const LikeUnlke = (props) => {
    const { text, LikeColour, UnlikeColour, DefaultStyle, ViewStyle, index } = props;
    const [liked, setLiked] = useState([]);

    return (
        <TouchableOpacity onPress={() => {
            if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
            } else {
                setLiked([...liked, index]);
            }
        }} style={[{ backgroundColor: liked.includes(index) ? LikeColour : UnlikeColour }, DefaultStyle]}>
            <Text>{text}</Text>
            <View style={ViewStyle}>
            </View>
        </TouchableOpacity>
    )
}
export default LikeUnlke;