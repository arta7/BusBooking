import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SH, SF, SW, Colors,Fonts } from "../../utils";
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
                        seatToUpdate.status = 6;

                        let PersonData = { name: '', family: '', date: '1370-12-12',mobile:'', code: '',gender:'1', status: '', chairNumber: seatToUpdate.chairNumber }

                        setBusPerson([...BusPerson, PersonData]);
                    }
                    else {
                        seatToUpdate.status = 0;
                        let PersonData = BusPerson.filter((elem) => elem.chairNumber !== text);
                        setBusPerson(PersonData);
                    }
                    setData(myNextList)


                }
            }
        }} style={[{ backgroundColor: liked.includes(chairNumber) ? LikeColour : UnlikeColour }, DefaultStyle]} disabled={index == 1 || index == 2  || index == 3 ? true : false}>
            <Text style={{fontSize:12, fontFamily:Fonts.Poppins_Medium}}>{text}</Text>
            <View style={ViewStyle}>
            </View>
        </TouchableOpacity>
    )
}
export default LikeUnlke;