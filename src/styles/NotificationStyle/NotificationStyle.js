import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

export default NotificationStyle = (Colors) => StyleSheet.create({
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: SH(0),
    backgroundColor: Colors.white_text_color,
    height: '100%',
    width: '100%',
  },
  MinFlexView: {
    width: '100%',
    height: '100%',
  },
  MinContentView: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
  },
  FlexDiractionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  ImageSet: {
    height: SH(100),
    width: SW(100),
    borderRadius: 20,
    marginRight: SH(20),
  },
  ParegraphWidth: {
    width: '68%'
  },
  TextParegraph: {
    fontSize: SF(13),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 19,
  },
  TwoNavemBerScreen: {
    fontSize: SF(13),
    color: Colors.theme_background,
    fontFamily: Fonts.Poppins_Medium,
  },
  FlexDiractionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  ParegraphWidthTwo: {
    width: '68%',
    borderBottomColor: Colors.light_gray_text_color,
  },
  MainViewNotification:{
    width: '100%',
    height: 'auto',
  }
})