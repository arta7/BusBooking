
import { StyleSheet, Platform } from 'react-native';
import { Fonts, SH, SW, SF, Colors } from '../../utils';

export default ChatStyles = (Colors) => StyleSheet.create({
  MinFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: SH(70),
    paddingTop: SH(5),
  },
  MainViewChat: {
    width: '100%',
    height: 'auto',
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white_text_color,
  },
  MinContentView: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  FlexRowJustyCenter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  ChatViewBgColor: {
    paddingVertical: SH(5),
    paddingHorizontal: SH(10),
    width: '70%',
    borderBottomLeftRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
    backgroundColor: Colors.argent_color,
  },
  TextColorMessageTwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    paddingTop: SH(6),
    textAlign: 'right'
  },
  DataSandTimeColor: {
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
    textAlign: 'center',
    paddingTop: SH(5),
    paddingLeft: SH(80),
    fontWeight: '600'
  },
  FlexRowJustyCentertwo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ImagStyleandCall: {
    width: SW(50),
    height: SH(52),
    borderRadius: 100,
  },
  MessageMinviewOwner: {
    backgroundColor: Colors.theme_background,
    paddingTop: SH(6),
    paddingBottom: SH(4),
    paddingHorizontal: SH(10),
    marginLeft: SH(10),
    width: '70%',
    borderBottomRightRadius: SH(20),
    borderTopLeftRadius: SH(20),
    borderTopRightRadius: SH(20),
  },
  TextColorMessage: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
  },
  FlexCheckSet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  TextColorMessageTwotwo: {
    color: Colors.White_Colour,
    fontSize: SF(12),
    paddingTop: SH(6),
  },
  SetRightIconViewStyle: {
    position: 'relative',
    top: SH(9),
    paddingLeft: SH(5),
  },
  SetIconPotion: {
    position: 'relative',
    top: -8.5,
  },
  seticonrevirview: {
    marginTop: -20,
  },
  PostionAbsoluTeView: {
    position: 'absolute',
    backgroundColor: Colors.white_text_color,
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: SH(30),
    borderTopRightRadius: SH(30),
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 10,
  },
  TextMessageView: {
    paddingHorizontal: SH(20)
  },
  FlexrowSendMesasage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SH(15)
  },
  TextInputBorderBottom: {
    padding: 0,
    width: SW(200),
    fontSize: SF(12),
  },
  FlexrowImagiNations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MarginRightlikeicon: {
    paddingLeft: SH(20),
  },
});
