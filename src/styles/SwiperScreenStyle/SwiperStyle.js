import { Colors, Fonts, SH, SW, SF } from '../../utils';
import { StyleSheet } from 'react-native';

export default SwiperStyle = (Colors) => StyleSheet.create({
  ScrollViewStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
  },
  AnimationViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  TitleStyles: {
    color: 'black',
    fontSize: SF(16),
    fontFamily: Fonts.Poppins_Italic,
    textAlign: 'center',
    paddingHorizontal: SH(15),
    position: 'absolute',
    top: SH(100),
    width: '100%',
  },
  Textstyle: {
    paddingHorizontal: SH(10),
    color: 'black',
    fontFamily: Fonts.Poppins_Italic,
    textAlign: 'center',
    fontSize: SF(14),
    position: 'absolute',
    bottom: SH(120),
    width: '100%'
  },
  ButtonCircle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NextTextStyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    color: 'black',
  },
  ActiveDotStyles: {
    width: SW(14),
    height: SH(16),
    borderRadius: 100,
    backgroundColor: Colors.theme_background,
  },
});