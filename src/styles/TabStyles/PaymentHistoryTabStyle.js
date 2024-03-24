import { StyleSheet } from 'react-native';
import { SF, SH, Colors, SW } from '../../utils';

export default PaymentHistoryTabStyle = (Colors) => StyleSheet.create({
    AppointmentHeader: {
        height: SH(100),
        borderBottomLeftRadius: SH(20),
        borderBottomEndRadius: SH(20),
    },
    PaymentBoxwrap: {
        padding: SH(5),
        marginHorizontal: SH(12)
    },
    PaymentBoxPerent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.TextWhiteColor,
        shadowColor: Colors.Shadow_Color,
        padding: SH(5),
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.02,
        shadowRadius: Platform.OS === 'ios' ? 2 : 20,
        elevation: Platform.OS === 'ios' ? 1 : 2.5,
        borderBottomColor: Colors.light_gray_text_color,
        paddingVertical: SH(10),
        marginVertical: SH(8),
        borderRadius: 3
    },
    PaymentAounttextpadright: {
        paddingRight: SH(3)
    },
    PaymentBox: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center'
    },
    AppointmentDrImage: {
        width: SW(60),
        height: SH(60),
        borderRadius: 100
    },
    PayemntIcon: {
        fontSize: SF(45),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.gray_text_color,
        padding: SH(5),
        color: Colors.gray_text_color
    },
    payemnttimebox: {
        paddingLeft: SH(10)
    },
    PayemnttranferheadText: {
        color: Colors.Shadow_Color,
        fontSize: SF(16),
    },
    PaymentTimeText: {
        color: Colors.theme_background,
        fontSize: SF(12),
    },
    PaymentAounttext: {
        fontSize: SF(18),
        color: Colors.Shadow_Color,
        textAlign: 'right'
    },
    PaymentAountIcon: {
        fontSize: SF(18),
        color: Colors.Shadow_Color,
    },
    PayemntStatus: {
        fontSize: SF(16),
        color: Colors.Shadow_Color,
        textAlign: 'right'
    },
    PayementSuccess: {
        color: Colors.GreenColor
    },
    PayementFaild: {
        color: Colors.Red
    },
    PayementPending: {
        color: Colors.Purple
    },
    PaymentIcon: {
        height: SH(30),
        width: SH(30),
    }
});