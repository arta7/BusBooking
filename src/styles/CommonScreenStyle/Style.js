import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default Style = (Colors) => StyleSheet.create({
  MinStyleViewPhotograpgyTwo: {
    height: '100%',
    width: '100%',
    // backgroundColor: Colors.theme_background,
  },
  ContentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
  MinViewSigninScreen: {
    width: '100%',
    height: '100%',
    marginHorizontal: '0%',
  },
  SplashMinView: {
    height: '100%',
    backgroundColor: '#e6f2ff',
  },
  MinViewStyleSplash: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MinViewScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  MinViewContent: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollViewStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',
  },
  FlexRowPassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: SH(14),
    height: SH(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white_text_color,
    shadowColor:Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  InputPassword: {
    width: '80%',
    color: Colors.gray_text_color,
    fontSize: SF(12),
    padding: SH(0),
    paddingTop: SH(5),
    fontFamily: Fonts.Poppins_Italic,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: 7,
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: 0,
      height: SH(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%',
  },
  SetbgColorGray: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CheckIconRight: {
    borderWidth: 3,
    height: SH(80),
    width: SW(75),
    borderRadius: SH(100),
    flexDirection: 'row',
    borderColor: Colors.theme_background,
    alignContent: 'center',
    justifyContent: 'center'
  },
  SetRoundCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  SetBackgroundIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(15),
  },
  RegisterTextSet: {
    paddingTop: SH(25),
    paddingBottom: SH(0),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SetText: {
    color: Colors.black_text_color,
    fontSize: SF(12),
    paddingHorizontal: SH(20),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Italic,
  },
  SetOkButton: {
    width: '47%'
  },
  ButtonMinView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(40),
    paddingTop: SH(20),
  },
  container: {
    height: '100%'
  },
  Buttonotp: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
});