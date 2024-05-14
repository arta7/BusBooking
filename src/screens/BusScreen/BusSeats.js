import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, LikeUnlike } from "../../components";
import { BusSeatScreenStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { SH, SF, SW, Colors } from "../../utils";
import { BusSeatData, MobileSelectData, BusSeatUpperData, BusSeatShowData, busSeat } from '../../utils/Imagedataset';
import { useTranslation } from 'react-i18next';
const SEAT_STATUS = {
  AVAILABLE: 1,
  BOOKED: 2,
};

const BusSeat = ({ chairNumber, status, onPress }) => {
  const backgroundColor = status === SEAT_STATUS.AVAILABLE ? 'green' : 'gray';
  const { Colors } = useTheme();
  const BusSeatScreenStyles = useMemo(() => BusSeatScreenStyle(Colors), [Colors]);
  const getStatusColor = () => {
    switch (status) {
        case 1:
            return 'green'; // Available (adjust based on your preference)
        case 2:
            return 'red'; // Occupied (adjust based on your preference)
        default:
            return 'gray'; // Unknown (adjust based on your preference)
    }
};
  return (
    // <TouchableOpacity style={[styles.seat, { backgroundColor }]} onPress={onPress}>
    //   <Text style={styles.seatText}>{chairNumber}</Text>
    // </TouchableOpacity>
    <View style={[styles.seat]}>
    <LikeUnlike
    text={status ==2? 'آقا'  : status ==1 ? 'خانم' : chairNumber}
    LikeColour={getStatusColor()}
    UnlikeColour={getStatusColor()}
    index={status}
    DefaultStyle={[BusSeatScreenStyles.BusSeatBox, { height: SH(40) }]}
    ViewStyle={[BusSeatScreenStyles.BuscusionStyle, { height: SH(5), }]}
/>
</View>
  );
};

const BusSeats = ({ data }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatPress = (chairNumber) => {
    const isSelected = selectedSeats.includes(chairNumber);
    setSelectedSeats(isSelected ? selectedSeats.filter(seat => seat !== chairNumber) : [...selectedSeats, chairNumber]);
  };

  const renderRow = (row) => {
    const seats = data?.filter((seat) => seat.row === row);
    const isTwoColumns = seats.length === 2;

    return (
      <View style={styles.row}>
        {seats?.map((seat) => (
         
          <BusSeat
            key={seat.chairNumber}
            chairNumber={seat.chairNumber}
            status={seat.status}
            onPress={() => handleSeatPress(seat.chairNumber)}
             style={isTwoColumns ? styles.seatTwoColumns : styles.seatFourColumns}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {data?.reduce((acc, seat) => {
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
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,width:'80%',marginHorizontal:'5%'
  },
  seat: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',marginHorizontal:'2%'
  },
  seatText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seatTwoColumns: {
    flex: 0.5,
  },
  seatFourColumns: {
    flex: 0.25,
  },
});

export default BusSeats;