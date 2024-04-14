import { SH, Fonts, SF, SW, Colors } from '../../utils';
import { StyleSheet, Platform } from 'react-native';

export default BusListScreenStyle = (Colors) => StyleSheet.create({
    FlightsCityBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomColor: Colors.BorderBox,
        borderBottomWidth: 0.5,
        paddingVertical: SH(15),
        paddingLeft: SH(10),
    },
    BackArrowBoxWidthSet: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CityMainBoxWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    CityMainBox: {
        width: '80%',
        paddingLeft: SH(20)
    },
    CityText: {
        color: Colors.theme_background,
        fontSize: SF(20),
    },
    RchSubheadTextStyle: {
        color: Colors.Blue,
        fontSize: SF(15),
        lineHeight: 16,
        paddingTop: SH(5)
    },
    HeadText: {
        color: Colors.BorderBox,
        fontSize: SF(16),
        paddingVertical: SH(20),
        paddingHorizontal: SH(15)
    },
    BusBoxWraper: {
        backgroundColor: Colors.white_text_color,
        // shadowColor: Colors.gray_text_color,
        // shadowOffset: {
        //     width: 0,
        //     height: Platform.OS === 'ios' ? 2 : 5,
        //     minHeight: '100%',
        // },
        // shadowOpacity: 1,
        // shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 2,
        borderRadius: 7,
        padding: SH(5),
        marginBottom: (10),borderColor:'#b3b5b4',borderWidth:1
    } ,
    TravelCompanyText: {
        color: Colors.black_text_color,
        fontSize: SF(16),
    },
    AcNonAcText: {
        color: Colors.black_text_color,
        fontSize: SF(11),
        // paddingTop: SH(7)
    },
    TextrightSet: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    MainPriceText: {
        color: Colors.Blue,
        fontSize: SF(15),
    },
    DiscountAmountText: {
        color: Colors.LightBlackText,
        fontSize: SF(14),
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        paddingTop: SH(3)
    },
    PercentaText: {
        color: Colors.GreenColor,
        fontSize: SF(14),
        paddingTop: SH(3)
    },
    FromTmeText: {
        color: Colors.TextBlackColor,
        fontSize: SF(16),
        paddingTop: SH(3)
    },
    BusdataTopBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BusComonStyle: {
        color: Colors.LightBlackText,
        fontSize: SF(12),
        paddingTop: SH(8)
    },
    LinkBox: {
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent:'space-between',borderTopColor:'#b3b5b4',borderTopWidth:1
    },
    RatingBox: {
        width: SW(25),
        height: SH(25),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Orange
    },
    RatingText: {
        color: Colors.TextWhiteColor,
        fontSize: SF(14),
    },
    LinkBoxtext: {
        fontSize: SF(11),
        paddingHorizontal: SH(10),
        color: Colors.theme_background
    },
    ContentContainerStyle: {
        padding: SH(10)
    },
    BuscusionStyle: {
        borderWidth: 1,
        borderColor: Colors.BorderBox,
        borderRadius: 2,
        width: '100%',
        height: SH(10),
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.TextWhiteColor
    },
    FlexRowSeatleft: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
    },
    SeatAvlblBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SH(5)
    },
    SeatAvChildBox: {
        width: SW(60),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(5)
    },
    SeatAvChildBoxText: {
        color: Colors.TextBlackColor,
        fontSize: SF(10),
        textAlign: 'center'
    },
    TabBoxTwoMin: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(50),
    },
    TabBoxTwo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: SH(10),
    },
    TabsettextActiveBoxTwo: {
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        textAlign: 'center',
        backgroundColor: Colors.Blue,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TabsettextBoxTwo: {
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        textAlign: 'center',
        width: '50%',
        borderWidth: 1,
        borderColor: Colors.BorderBox,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TableftAciveBorder: {
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    TablrightAciveBorder: {
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3
    },
    TabsettextActiveTwo: {
        color: Colors.TextWhiteColor,
        textTransform: 'capitalize',
        fontSize: SF(16),
        textAlign: 'center',
        paddingVertical: SH(3),
        paddingHorizontal: SH(10),
    },
    BusSratflatlistbox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white_text_color,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: Colors.black_text_color,
        elevation: 20,
    },
    BusFinalBoookedBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white_text_color,
        borderTopColor: Colors.BorderBox,
        borderTopWidth: 1,
        paddingVertical: SH(5)
    },
    Widthone: {
        width: '40%',
        paddingLeft: SH(15)
    },
    Selectedtext: {
        color: Colors.LightBlackText,
        fontSize: SF(16),
    },
    SelectedSeattext: {
        color: Colors.TextBlackColor,
        fontSize: SF(16),
        textAlign: 'left'
    },
    Widthtwo: {
        width: '20%'
    },
    Widththree: {
        width: '40%',
        paddingLeft: SH(20),
        paddingRight: SH(5)
    },
    ButtonStyle: {
        width: '100%',
        borderRadius: 10,
        height: 'auto',
        paddingVertical: SH(10)
    },
    BusComonStyleBlue: {
        color: Colors.Purple,
        fontSize: SF(14),
        paddingTop: SH(8)
    },
});