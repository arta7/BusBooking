import { SH, Fonts, Colors, SF, SW, } from '../../utils';
import { StyleSheet } from 'react-native';

export default BusSeatScreenStyle = (Colors) => StyleSheet.create({
    ButtonStyle: {
        width: '100%',
        borderRadius: 10,
        height: 'auto',
        paddingVertical: SH(10)
    },
    Widththree: {
        width: '40%',
        paddingLeft: SH(20),
        paddingRight: SH(5)
    },
    SelectedSeattext: {
        color: Colors.black_text_color,
        fontSize: SF(12),
        textAlign: 'left',
        fontFamily:Fonts.Poppins_Medium
    },
    Selectedtext: {
        color: Colors.Gray_Colour,
        fontSize: SF(12),
     fontFamily: Fonts.Poppins_Italic 
    },
    Widthtwo: {
        width: '20%'
    },
    Widthone: {
        width: '40%',
        paddingLeft: SH(15)
    },
    BusFinalBoookedBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.TextWhiteColor,
        borderTopColor: Colors.black_text_color,
        borderTopWidth: 1,
        paddingVertical: SH(5)
    },
    BusSratflatlistbox: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Colors.TextWhiteColor,
        shadowRadius: 2,
    },
    TabBoxTwo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // marginBottom: SH(10),
    },
    TabBoxTwoMin: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(50),
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
    TabsettextActiveTwo: {
        color: Colors.White_Colour,
        textTransform: 'capitalize',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(12),
        textAlign: 'center',
        paddingVertical: SH(3),
        paddingHorizontal: SH(10),
    },
    TableftAciveBorder: {
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3
    },
    TabsettextBoxTwo: {
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        textAlign: 'center',
        width: '50%',
        borderWidth: 1,
        borderColor: Colors.black_text_color,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TabsettextTwo: {
        color: Colors.black_text_color,
        textTransform: 'capitalize',
        fontSize: SF(12),
        textAlign: 'center',
        paddingVertical: SH(3),
        paddingHorizontal: SH(10),
    },
    ContentContainerStyle: {
        padding: SH(10)
    },
    MinFlexView: {
        width: '100%',
        height: '100%'
        // ,backgroundColor:'rgba(190,240,250,0.5)'
    },
    SeatAvChildBoxText: {
        color: Colors.black_text_color,
        fontSize: SF(12),
        textAlign: 'center',
        fontFamily:Fonts.Poppins_Italic
    },
    SeatAvChildBox: {
        width: SW(60),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(5)
    },
    SeatAvlblBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SH(5)
    },
    BuscusionStyle: {
        borderWidth: 1,
        borderColor: Colors.black_text_color,
        borderRadius: 2,
        width: '100%',
       
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.White_Colour,
    },
    BusSeatBox: {
        borderWidth: 1,
        borderColor: Colors.black_text_color,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
      
       
        position: 'relative',
        paddingHorizontal: SH(3)
    },
    BusSeatBoxright: {
        marginRight: SH(40)
    },
    FlexRowSeatLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
    },
    FlexRowSeatRight: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%',
    },
    LastListStyle: {
        paddingLeft:SW(10)
    },
    BuscusionStyle: {
        borderWidth: 1,
        borderColor: Colors.black_text_color,
        borderRadius: 2,
        width: '100%',
        height: SH(10),
        position: 'absolute',
        bottom: 10,
        backgroundColor: Colors.White_Colour,
    },
    Width50: {
        width: '50%',
    },
    FlexRowSeatBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(25),
        marginBottom: SH(10)
    },
    RchSubheadTextStyle: {
        color: Colors.black_text_color,
        fontSize: SF(12),
        lineHeight: 16,
        paddingTop: SH(5)
    },
    CityText: {
        color: Colors.black_text_color,
        fontSize: SF(14),
    },
    CityMainBox: {
        width: '80%',
        paddingLeft: SH(20)
    },
    CityMainBoxWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    BackArrowBoxWidthSet: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    FlightsCityBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomColor: Colors.black_text_color,
        borderBottomWidth: 0.5,
        paddingVertical: SH(5),
        paddingLeft: SH(10),
    },
});