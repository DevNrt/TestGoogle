import React from 'react';
import {AppRegistry, View, Text, Picker, Button, Alert, Share} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import StringsLanguage from '../utils/StringsLanguage';

export default class SettingsView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state ={
            language: null,
            navigate: this.props.navigation.navigate
        };
        AsyncStorage.getItem('language').then(data => {
            this.setState({ 'language': data });
        }).done();
    }

    getCodeInvitation(){
        let code = Math.random().toString(36);
        return code.substring(2, code.length);
    }

    showCodeInvitation(){
        Alert.alert(
            StringsLanguage.title_popup_share,
            StringsLanguage.message_popup_share,
            [
                {
                    text: StringsLanguage.button_popup_share,
                    onPress: () => this.shareCodeInvitation()
                },
                {
                    text: StringsLanguage.button_cancel_popup_share,
                    style: 'cancel',
                }
            ],
            {cancelable: false},
        );
    }

    async shareCodeInvitation(){
        let code = this.getCodeInvitation();
        try {
            const result = await Share.share({
                message:
                `${StringsLanguage.message_share_code} ${code}`,
            });

            if (result.action === Share.sharedAction) {
                console.log('result',result)
                if (result.activityType) {
                    console.log('bien')
                } else {
                    console.log('mal')
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('cancel')
            }
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>{StringsLanguage.title_section_settings}</Text>
                <View >
                    <Picker style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.saveLanguage(itemValue)}>
                        <Picker.Item value="en-us" label={StringsLanguage.option_english_language} />
                        <Picker.Item value="es-co" label={StringsLanguage.option_spanish_language} />
                    </Picker>
                </View>
                <View>
                    <Button title={StringsLanguage.invite_button} onPress={() => {this.showCodeInvitation()}}/>
                </View>
                <View>
                    <Button title={StringsLanguage.back_button} onPress={() => {this.state.navigate('ProfileView')}}/>
                </View>
            </View>
        );
    }

    componentDidMount(): void {

    }

    async saveLanguage(language){
        try {
            await AsyncStorage.setItem('language', language);
            StringsLanguage.setLanguage(language);
            this.setState({language: language});
        } catch (error) {
           console.log('Error', error.toString())
        }
    }
}

const styles = {
    title: {
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    picker: {
        height: 50,
        width: '100%'
    }
};

AppRegistry.registerComponent('SettingsView', () => SettingsView);
