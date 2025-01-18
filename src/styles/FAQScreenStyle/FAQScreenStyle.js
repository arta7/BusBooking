import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default FAQScreenStyle = (Colors) => StyleSheet.create({
  BgColorWhite: {
    backgroundColor: Colors.white_text_color,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.gray_text_color,
  },
  FlexRowArrowLeftThree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white_text_color,
    borderRadius: 5,
    padding: SH(10),
    paddingTop: SH(0),
  },
  FlexRowCreditCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextWidth: {
    width: '88%',
  },
  CreditCardText: {
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Italic,
    fontWeight: '400',
    color: Colors.black_text_color,
  },
  ParegraPhViewStyle: {
    paddingVertical: SH(10),
    paddingHorizontal: SH(10),
    width: '88%',
  },
  ParegraphTextHelp: {
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Italic,
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: SH(0),
    backgroundColor: Colors.white_text_color,
    height: '100%',
    width: '100%',
    paddingBottom: SH(15)
  },
  MainViewFAQ: {
    width: '100%',
    height: 'auto',
  },
  MinFlexView: {
    width: '100%',
    height: '100%',
  },
  MinViewAllContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BgWhiteView: {
    position: 'absolute',
    paddingTop: SH(10),
    paddingBottom: SH(20),
    width: '100%',
    backgroundColor: Colors.white_text_color
  },
  ChangeTheameBgColor: {
    height: SH(67),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 200,
    backgroundColor: Colors.theme_background,
  },
  SetFileChnage: {
    paddingHorizontal: SH(12),
    width: '95%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Italic,
    borderRadius: 200,
    backgroundColor: Colors.white_text_color,
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  InputWidth: {
    width: '90%'
  },
  InputStyles: {
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
  },
  Iconstyles: {
    width: '10%',
  },
})