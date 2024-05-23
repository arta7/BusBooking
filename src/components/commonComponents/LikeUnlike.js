import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const LikeUnlke = (props) => {
    const { text, LikeColour, UnlikeColour, DefaultStyle, ViewStyle, index, chairNumber, data, setData, BusPerson, setBusPerson } = props;
    const [liked, setLiked] = useState([]);

    return (
        <TouchableOpacity onPress={() => {
            console.log('click', liked)
            {
          
                {
                    const myNextList = Object.assign({}, data);
                    const DatesStep = myNextList;
                    // console.log('data', DatesStep)
                    const seatToUpdate = DatesStep.seates?.filter(a => a.chairNumber === text)[0];
                    console.log('seatToUpdate', seatToUpdate)
                    if (seatToUpdate.status == 0) {
                        seatToUpdate.status = 3;

                        let PersonData = { name: '', family: '', date: '',mobile:'', code: '',gender:'1', status: '', chairNumber: seatToUpdate.chairNumber }

                        setBusPerson([...BusPerson, PersonData]);
                    }
                    else {
                        seatToUpdate.status = 0;
                        let PersonData = BusPerson.filter((elem) => elem.chairNumber !== text);
                        // console.log('PersonData',PersonData,BusPerson)
                        setBusPerson(PersonData);
                    }
                    // DatesStep?.seates?.filter(a => a.chairNumber == text && a.status == 0)[0].status = 3;
                    // console.log('myNextList', DatesStep.seates)
                    setData(myNextList)


                }
            }
        }} style={[{ backgroundColor: liked.includes(chairNumber) ? LikeColour : UnlikeColour }, DefaultStyle]} disabled={index == 1 || index == 2 ? true : false}>
            <Text>{text}</Text>
            <View style={ViewStyle}>
            </View>
        </TouchableOpacity>
    )
}
export default LikeUnlke;