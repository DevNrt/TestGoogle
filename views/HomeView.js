import React from 'react';
import { AppRegistry, Button, View, ImageBackground } from 'react-native';
import {GoogleSignin} from "react-native-google-signin";

export default class HomeView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
        }
    }

    async componentDidMount(): void {
        HomeView.configureGoogleSignIn();

    }

    static configureGoogleSignIn() {
        GoogleSignin.configure({
            webClientId: '130442303187-mn6eee3f8nj26ls8ike2685qoi2uk8gq.apps.googleusercontent.com',
            offlineAccess: false,
        });
    }

    async verifyAuth(){
        const isSignedIn = await GoogleSignin.isSignedIn();

        if(isSignedIn){
            this.goToProfile();
        }else{
            this.state.navigate('AuthView');
        }
    }

    async goToProfile(){
        const userInfo = await GoogleSignin.getCurrentUser();
        this.state.navigate('ProfileView', {
            email: userInfo.email,
            name: userInfo.name,
            id: userInfo.id
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../images/background_home.png')} style={styles.background}>
                    <View style={styles.container_button}>
                        <Button
                            style={styles.button}
                            title='Ingresar'
                            onPress={() => this.verifyAuth()}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1
    },
    container_button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent'
    }
};

AppRegistry.registerComponent('HomeView', () => HomeView);
