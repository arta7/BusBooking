import { StyleSheet } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

export default HomeTabStyles = (Colors) => StyleSheet.create({
    WithFrom: {
        width: '100%'
    },
    FromText: {
        color: Colors.Gray_Colour,
        fontSize: SF(12),
        paddingBottom: SH(10)
    },
    DropDownStyleTwo: {
        borderBottomColor: Colors.Gray_Colour,
        minHeight: SH(50)
    },
    FlewRow: {
        flexDirection: 'row',
        paddingVertical: SH(20)
    },
    DepartureText: {
        color: Colors.Gray_Colour,
        fontSize: SF(12),
        paddingTop: SH(15)
    },
    InputUnderLine: {
        backgroundColor: Colors.White_Colour,
        width: '100%',
        color: Colors.black_text_color,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: SH(40),
        marginBottom: 12,
        paddingLeft: 7,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black_text_color,
    },
    DateFrom: {
        color: Colors.black_text_color,
    },
    InputUnderLineWidth: {
        width: '100%'
    },
    DepartureText: {
        color: Colors.Gray_Colour,
        fontSize: SF(12),
        paddingTop: SH(15)
    },
    textRight: {
        textAlign: 'right'
    },
    InputUnderLineTow: {
        width: '100%',
        color: Colors.black_text_color,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 0,
        height: SH(40),
        marginBottom: 12,
        paddingRight: 6,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black_text_color,
        backgroundColor: Colors.White_Colour,
    },
    TextRight: {
        textAlign: 'right',
        color: Colors.black_text_color,
    },
    SelectPersonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SelectPersonBoxChild: {
        width: '49%',
        backgroundColor: Colors.white_text_color,
        shadowColor: Colors.white,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SH(10),
        borderWidth: 0.5,
        borderColor: Colors.light_gray_text_color,
        marginHorizontal: SH(3)
    },
    Adultstext: {
        color: Colors.black_text_color,
        textAlign: 'center',
        fontSize: SF(12),
    },
    AdultstextYears: {
        color: Colors.gray_text_color,
        textAlign: 'center',
        fontSize: SF(12),
    },
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: SH(10)
    },
    IconCommon: {
        fontSize: SF(12),
    },
    MinusColor: {
        color: Colors.Red
    },
    TotalStyle: {
        color: Colors.black_text_color,
        fontSize: SF(12),
        paddingHorizontal: SH(10),
    },
    MainVieBackground: {
        paddingHorizontal: SH(15),
        height: '100%',
        backgroundColor:'rgba(190,240,250,0.3)'
        // backgroundColor: Colors.BGScreen
    },
    FlexCenterViewTWO: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 14,
        marginLeft: 18,
        paddingHorizontal: '1%'
    },
    WidtSetNew: {
        width: SW(84),
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageCenterStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
    },
    TetTwoView: {
        width: '90%'
    },
    TextSetFood: {
        fontSize: SF(12),
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 4,
        color: Colors.theme_background
    },
    textsetfoodtwwo: {
        fontSize: SF(12),
        textAlign: 'center',
        paddingTop: 2,
    },
    TextSetFoodtwwo: {
        fontSize: SF(12),
        textAlign: 'center',
        paddingTop: 2,
    },
    MainText: {
        fontSize: SF(14),
        color: Colors.black_text_color,
    },
    SmallText: {
        fontSize: SF(12),
    },
    SetFlex: {
        overflow: 'hidden',
    },
    MainViewOffers: {
        paddingRight: 12,
        backgroundColor: Colors.light_gray_text_color
    },
    ExclusiveImgWrap: {
        height: SH(100),
        width: SW(200),
        marginRight: 12,
        position: 'relative',
        borderRadius: 7
    },
    OffersImg: {
        height: SH(50),
        width: SW(100),
        borderRadius: 7
    },
    OffersText: {
        fontSize: SF(12),
        fontWeight: '600',
        textAlign: 'left',
        color: Colors.black_text_color
    },
    ExclusiveImg: {
        height: SH(100),
        width: SW(200),
        borderRadius: 7
    },
    OffreView: {
        position: 'absolute',
        bottom: SH(10),
        left: SH(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    KnowMoreIcon: {
        color: Colors.theme_background,
        fontSize: SF(12),
        paddingLeft: SW(6)
    },
    BorderView: {
        borderBottomColor: Colors.gray_text_color,
        borderBottomWidth: SH(0.5),
        height: SH(1),
        width: '100%'
    },
    LottieImageStyle: {
        hight: SH(100),
        width: SW(95),
    },
    KnowMoreText: {
        fontSize: SF(12),
        color: Colors.theme_background
    },
    SearchBusView: {
        backgroundColor: Colors.White_Colour,
        paddingHorizontal: SW(10),
        paddingVertical: SH(12),
        borderRadius: SF(7),
        borderColor: Colors.Gray_Colour,
        borderWidth: SF(0.5)
    },
    ScrollviewHight: {
        height: '100%'
        //,backgroundColor:'rgba(190,240,250,0.5)'
    },
});