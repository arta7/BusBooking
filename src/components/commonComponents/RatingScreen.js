import React from "react";
import { StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import { SH, SF, SW, Colors } from "../../utils";

function RatingScreen(props) {

  const styles = useMemo(
    () =>
      StyleSheet.create({
        PaddingStyle: {
          paddingVertical: SH(10)
        }
      }),
    [Colors],
  );

  return (
    <Rating
      type='custom'
      ratingColor={Colors.Yellow}
      ratingBackgroundColor={Colors.chinese_silver}
      ratingCount={5}
      tintColor={Colors.white_text_color}
      imageSize={SH(14)}
      startingValue={4.5}
      isDisabled={false}
      style={styles.PaddingStyle}
    />
  );
};
export default RatingScreen;