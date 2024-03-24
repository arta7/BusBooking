import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW, Colors } from '../../utils';

export default ReviewsScreenStyle = (Colors) => StyleSheet.create({
  MinViewScreenTwo: {
    backgroundColor: Colors.white_text_color,
    height: '100%',
    width: '100%',
    paddingHorizontal: SH(15)
  },
  MainViewReviews: {
    width: '100%',
    height: 'auto',
  },
  MinContentView: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
  },
  PostionReView: {
    position: 'relative',
    width: '60%',
    right: SH(7),
  },
  AccountTextTwo: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  FlexRowStarSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(15),
  },
  AccountTextSuccessfullyTwo: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: 20,
    color: Colors.gray_text_color
  },
  InputUnderLineReviews: {
    borderWidth: 1,
    width: '100%',
    color: Colors.black_text_color,
    borderRadius: 7,
    fontFamily: Fonts.Poppins_Medium,
    marginBottom: SH(12),
    paddingVertical: SH(20),
    paddingHorizontal: SH(15),
    borderColor: Colors.gray_text_color,
  },
  PositionStyleInput: {
    position: 'relative',
    top: -20,
  },
  AccountButton: {
    width: '100%',
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});