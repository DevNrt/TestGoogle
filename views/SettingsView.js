import React from 'react';
import {AppRegistry, View, Text, Picker, Button} from 'react-native';
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
    render() {
        return (
            <View>
                <Text style={styles.title}>Configuración</Text>
                <View >
                    <Picker style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue) => this.saveLanguage(itemValue)}>
                        <Picker.Item value="en-us" label="Inglés" />
                        <Picker.Item value="es-co" label="Español" />
                    </Picker>
                    <Button title="Regresar" onPress={() => {this.state.navigate('ProfileView')}}/>
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
