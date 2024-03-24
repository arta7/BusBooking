import React, { useMemo } from "react";
import { Modal, Text, View } from "react-native";
import { Style } from '../../styles';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import { Button } from '../../components';
import propTypes from 'prop-types';
import { SH, SF, SW, Colors } from "../../utils";
import { useTheme } from '@react-navigation/native';

function SweetaelertModal(props) {
    const { Colors } = useTheme();
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const { message, modalVisible, setModalVisible, ButtonMinView, onPress, onPressCancel, buttonText, cancelButtonText, iconVisible } = props;
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={Styles.SetbgColorGray}>
            <View style={Styles.CenteredView}>
                <View style={Styles.ModalView}>
                    {iconVisible &&
                        <View style={Styles.SetRoundCenter}>
                            <View style={[Styles.CheckIconRight, { borderColor: Colors.theme_background }]}>
                                <IconF style={Styles.SetBackgroundIcon} color={Colors.theme_background} name="check" size={SF(45)} />
                            </View>
                        </View>
                    }
                    <View style={Styles.RegisterTextSet}>
                        <Text style={Styles.SetText}>{message}</Text>
                    </View>
                    <View style={[Styles.ButtonMinView, { ...ButtonMinView }]} >
                        <View style={Styles.SetOkButton}>
                            <Button title={buttonText}
                                onPress={() => { onPress && onPress() }}
                            />
                        </View>
                        {cancelButtonText ?
                            <View style={Styles.SetOkButton}>
                                <Button title={cancelButtonText}
                                    onPress={() => { onPressCancel() }}
                                />
                            </View>
                            : null
                        }
                    </View>
                </View>
            </View>
        </View>
    </Modal>;
}

SweetaelertModal.defaultProps = {
    message: '',
    setModalVisible: () => { },
    modalVisible: false,
    onPress: () => { },
    onPressCancel: () => { },
    buttonText: 'Ok',
    cancelButtonText: '',
    iconVisible: false
};

SweetaelertModal.propTypes = {
    message: propTypes.string,
    setModalVisible: propTypes.func,
    modalVisible: propTypes.boolean,
    onPress: propTypes.func,
    onPressCancel: propTypes.func,
    buttonText: propTypes.string,
    cancelButtonText: propTypes.string,
    iconVisible: propTypes.boolean
};

export default SweetaelertModal;
