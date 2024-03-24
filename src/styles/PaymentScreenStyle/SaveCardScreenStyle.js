import { StyleSheet } from 'react-native';
import { SH, SW, SF, Fonts, Colors } from '../../utils';

export default Creditcard = (Colors) => StyleSheet.create({
  MinStyleViewPhotograpgy: {
    flexDirection: 'row',
    backgroundColor: Colors.White_Colour,
    marginBottom: 30,
    paddingTop: SH(30),
    justifyContent: 'center',
    height: '100%',
  },
  MainViewCreditCard: {
    width: '100%',
    height: 'auto',
  },
  MinViewSigninScreen: {
    width: '90%',
    marginHorizontal: '5%',
  },
  SetWidthImage: {
    height: SH(250),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CreditCard: {
    height: SH(250),
    flexDirection: 'row',
    justifyContent: 'center',
    width: SW(420),
  },
  SetStyleInputText: {
    backgroundColor: Colors.gray_text_color,
    paddingHorizontal: SW(15),
    paddingVertical: SH(5),
    borderRadius: 7,
  },
  TextStyle: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  InputStyle: {
    padding: 0,
    color: Colors.black_text_color,
    width: SW(200),
    fontFamily: Fonts.Poppins_Medium,
  },
  FlexRowsetInput: {
    flexDirection: 'row',
  },
  SetStyleInputTextTwo: {
    backgroundColor: Colors.gray_text_color,
    paddingHorizontal: SW(15),
    borderRadius: 7,
    width: '48%',
    marginRight: 15,
    marginTop: 18,
  },
  SetButtonTextStyle: {
    color: Colors.White_Colour
  },
  SetButtonStyle: {
    marginTop: 26,
  },
});