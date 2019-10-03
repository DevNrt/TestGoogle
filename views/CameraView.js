import React from 'react';
import { AppRegistry, Button, Text, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import StringsLanguage from '../utils/StringsLanguage';

export default class CameraView extends React.Component {

    constructor(props) {
        super(props);
        this.camera = null;

        this.state = {
            navigate: this.props.navigation.navigate,
            mision: this.props.navigation.getParam('mision'),
            activity: this.props.navigation.getParam('activity'),
            camera: {
                type: RNCamera.Constants.Type.back,
                flashMode: RNCamera.Constants.FlashMode.auto,
            }
        };
    }

    static navigationOptions = {
        title: StringsLanguage.title_toolbar_section_camera,
    };
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    defaultTouchToFocus
                    flashMode={this.state.camera.flashMode}
                    mirrorImage={false}
                    onFocusChanged={() => {}}
                    onZoomChanged={() => {}}
                    style={styles.preview}
                    type={this.state.camera.type}
                    captureAudio={false}
                />
                <View style={[styles.overlay, styles.bottomOverlay]}>
                    <Button
                        title={StringsLanguage.take_photo_button}
                        onPress={() => this.takePicture()}
                    />
                </View>

            </View>

        );
    }

    async takePicture() {
        if (this.camera) {
            const options = { quality: 0.5 };
            try {
                const data = await this.camera.takePictureAsync(options);
                this.state.navigate('EvidenceView', { pathPhoto: data.uri, mision: this.state.mision, activity: this.state.activity })
            }catch (e) {
                Alert.alert('error', e.toString())
            }


        }
    }
}
const styles = {
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        padding: 16,
        right: 0,
        left: 0,
        alignItems: 'center'
    },
    topOverlay: {
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomOverlay: {
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    enterBarcodeManualButton: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 40
    },
    scanScreenMessage: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

AppRegistry.registerComponent('CameraView', () => CameraView);
