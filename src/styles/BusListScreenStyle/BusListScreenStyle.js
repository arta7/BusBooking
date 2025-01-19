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
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        width: '90%',
    },
    CityMainBox: {
        width: '100%',
        paddingLeft: SH(20)
    },
    CityText: {
        color: Colors.black_text_color,
        fontSize: SF(12),
        fontFamily:Fonts.Poppins_Italic
    },
    RchSubheadTextStyle: {
        color: Colors.Blue,
        fontSize: SF(12),
        lineHeight: 16,
        paddingTop: SH(5),
        fontFamily:Fonts.Poppins_Italic
    },
    HeadText: {
        color: Colors.BorderBox,
        fontSize: SF(14),
        paddingVertical: SH(20),
        paddingHorizontal: SH(15),
        fontFamily:Fonts.Poppins_Italic
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
        fontSize: SF(12),
        fontFamily:Fonts.Poppins_Italic
    },
    AcNonAcText: {
        color: Colors.black_text_color,
        fontSize: SF(12),
        fontFamily:Fonts.Poppins_Italic
        // paddingTop: SH(7)
    },
    TextrightSet: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    MainPriceText: {
        color: Colors.Blue,
        fontSize: SF(12),
        fontFamily:Fonts.Poppins_Italic
    },
    DiscountAmountText: {
        color: Colors.LightBlackText,
        fontSize: SF(12),
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        paddingTop: SH(3),
        fontFamily:Fonts.Poppins_Italic
    },
    PercentaText: {
        color: Colors.GreenColor,
        fontSize: SF(12),
        paddingTop: SH(3),
        fontFamily:Fonts.Poppins_Italic
    },
    FromTmeText: {
        color: Colors.TextBlackColor,
        fontSize: SF(12),
        paddingTop: SH(3),
        fontFamily:Fonts.Poppins_Italic
    },
    BusdataTopBox: {
         flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BusComonStyle: {
        color: Colors.LightBlackText,
        fontSize: SF(12),
        paddingTop: SH(8),
        fontFamily:Fonts.Poppins_Italic
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
        fontSize: SF(12), fontFamily:Fonts.Poppins_Italic
    },
    LinkBoxtext: {
        fontSize: SF(12),
        paddingHorizontal: SH(10),
        color: Colors.theme_background,
        fontFamily:Fonts.Poppins_Italic
    },
    ContentContainerStyle: {
        padding: SH(20)
    },
    BuscusionStyle: {
        borderWidth: 1,
        borderColor: Colors.BorderBox,
        borderRadius: 2,
        width: '100%',
        height: SH(10),
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.TextWhiteColor,
        fontFamily:Fonts.Poppins_Italic
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
        paddingVertical: SH(5),
        fontFamily:Fonts.Poppins_Italic
    },
    SeatAvChildBox: {
        width: SW(60),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(5),
        fontFamily:Fonts.Poppins_Italic
    },
    SeatAvChildBoxText: {
        color: Colors.TextBlackColor,
        fontSize: SF(12),
        textAlign: 'center',
        fontFamily:Fonts.Poppins_Italic
    },
    TabBoxTwoMin: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(50),
        fontFamily:Fonts.Poppins_Italic
    },
    TabBoxTwo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: SH(10),
        fontFamily:Fonts.Poppins_Italic
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
        fontFamily:Fonts.Poppins_Italic
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
        fontFamily:Fonts.Poppins_Italic
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
        fontSize: SF(12),
        textAlign: 'center',
        paddingVertical: SH(3),
        paddingHorizontal: SH(10),
        fontFamily:Fonts.Poppins_Italic
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
        fontSize: SF(12),
        fontFamily:Fonts.Poppins_Italic
    },
    SelectedSeattext: {
        color: Colors.TextBlackColor,
        fontSize: SF(12),
        textAlign: 'left',
        fontFamily:Fonts.Poppins_Italic
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
        fontSize: SF(12),
        paddingTop: SH(8),
        fontFamily:Fonts.Poppins_Italic
    },
});