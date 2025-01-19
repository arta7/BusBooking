import { StyleSheet } from 'react-native';
import { Colors, Fonts, SH, SW, SF } from '../../utils';

export default StyleSheet.create({
  customslidebarmenu: {
    paddingHorizontal: SH(20),
    paddingTop: SH(10),
  },
  hometextstyle: {
    color: Colors.black_text_color,
    fontSize: SF(12),
    fontFamily: Fonts.Poppins_Italic,
    paddingLeft: SH(20),
    opacity: 0.7,
  },
  flexrowset: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.light_gray_text_color,
    borderBottomWidth: 1.5,
    paddingVertical: SH(16),
    borderStyle: 'dotted',
  },
  settingandlogout: {
    paddingTop: SH(40),
  },
  logoimage: {
    width: SW(20),
    height: SH(20),
  },
});