import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default HelpScreenStyles = (Colors) => StyleSheet.create({
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: SH(0),
    backgroundColor: Colors.white_text_color,
    height: '100%',
    width: '100%',
  },
  HelpViewStyles: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SH(20),
  },
  MinContentView: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
  },
  TextInputWidth: {
    backgroundColor: Colors.white_text_color,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.gray_text_color,
    paddingBottom: SH(100),
    paddingHorizontal: SH(10),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  TextInputeText: {
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray_text_color,
    fontSize: SF(14),
    paddingTop: SH(20),
  },
  ButtonStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: SH(20),
    paddingBottom: SH(5),
  },
  FlexCenterButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  MainViewHelp: {
    width: '100%',
    height: 'auto',
  }
});
