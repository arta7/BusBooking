import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, LikeUnlike } from "../../components";
import { BusSeatScreenStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { SH, SF, SW, Colors,Fonts } from "../../utils";
import { BusSeatData, MobileSelectData, BusSeatUpperData, BusSeatShowData, busSeat } from '../../utils/Imagedataset';
import { useTranslation } from 'react-i18next';
const SEAT_STATUS = {
  AVAILABLE: 1,
  BOOKED: 2,
};

const BusSeat = ({ chairNumber, status, index, RowSeats, data, setData, BusPerson, setBusPerson, onPress }) => {
  const { Colors } = useTheme();
  var datarow = RowSeats;
  const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);

  const getStatusColor = () => {
    switch (status) {
      case 0:
        return '#c4c4c4';
      case 1:
        return '#53eff5'; // Available (adjust based on your preference)
      case 2:
        return 'pink'; // Occupied (adjust based on your preference)
        case 3:
          return 'yellow';
        default:
        return Colors.theme_background; // Unknown (adjust based on your preference)
    }
  };
  return (

    <View style={[styles.seat, index == datarow ? { marginLeft: '20%' } : { marginHorizontal: '2%' }]}>
      <LikeUnlike
        text={status == 1 ? 'آقا' : status == 2 ? 'خانم' : chairNumber}
        LikeColour={getStatusColor()}
        UnlikeColour={getStatusColor()}
        index={status}
        data={data}
        DefaultStyle={[BusSeatScreenStyles.BusSeatBox, { height: SH(50),  width: SW(35), }]}
        ViewStyle={[BusSeatScreenStyles.BuscusionStyle, { height: SH(3) }]}
        onPress={onPress}
        setData={setData}
        BusPerson={BusPerson}
        setBusPerson={setBusPerson}
      />
    </View>
  );
};

const BusSeats = ({ data, setData, BusPerson, setBusPerson }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatPress = (chairNumber) => {
    console.log('chairnumber')
    const isSelected = selectedSeats.includes(chairNumber);
    setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
  };

  const renderRow = (row) => {
    const seats = data?.seates?.filter((seat) => seat.row === row).filter(s=>s.chairNumber !=-1);
    const isTwoColumns = seats.length === 2;
    var RowSeats = data?.seates?.length > 0 && data?.seates?.filter(a => a.row == 1).length == 3 ? 1 : 2
    return (
      <View style={styles.row}>
        {seats?.map((seat, index) => (
          <BusSeat
            key={seat.chairNumber}
            chairNumber={seat.chairNumber}
            status={seat.status}
            onPress={() => handleSeatPress(seat.chairNumber)}
            style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
            index={seat.column}
            RowSeats={RowSeats}
            data={data}
            setData={setData}
            BusPerson={BusPerson}
            setBusPerson={setBusPerson}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {data?.seates?.reduce((acc, seat) => {
        if (!acc.currentRow || acc.currentRow !== seat.row) {
          acc.currentRow = seat.row;
          acc.rows.push(renderRow(seat.row));
        }
        return acc;
      }, { rows: [], currentRow: null }).rows}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
    //,borderWidth:1,marginBottom:5,borderTopWidth:0,borderBottomWidth:0,borderColor:'transparent'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10, width: '80%',marginHorizontal:'1%'
  },
  seat: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
    //, marginHorizontal: '2%'
  },
  seatText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:Fonts.Poppins_Medium
  },
  seatTwoColumns: {
    flex: 0.5,
  },
  seatFourColumns: {
    flex: 0.25,
  },
});

export default BusSeats;