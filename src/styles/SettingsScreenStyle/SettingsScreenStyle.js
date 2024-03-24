import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW, Colors } from '../../utils';

export default SettingStyle = (Colors) => StyleSheet.create({
  KeyBordTopViewStyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MinFlexView: {
    width: '93%',
  },
  Togglrswitchflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  CellularDataText: {
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
  },
  TogglesWotchview: {
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.light_gray_text_color,
    paddingBottom: SH(22),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DownlodToggleswitchText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(16),
  },
  RightiConMinview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_gray_text_color,
    paddingBottom: SH(17),
  },
  StandardRecommeDtext: {
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.black_text_color,
    fontSize: SF(16),
  },
  DownloadFasterText: {
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
    opacity: 0.5,
    paddingTop: '3%',
    color: Colors.black_text_color,
  },
  ChekIconStyle: {
    color: Colors.black_text_color,
  },
  BodyTextWidth: {
    width: '80%',
  },
  RightiConMinviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '5%',
    paddingBottom: SH(17),
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    paddingVertical:SH(8)
  },
  ContentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
});