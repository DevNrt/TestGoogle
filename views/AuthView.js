import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes, AsyncStorage } from 'react-native-google-signin';

export default class AuthView extends React.Component {

  static navigationOptions = {
    title: 'Evoke'
  };

  constructor(props) {
    super(props);
    this.state = {
      navigate: this.props.navigation.navigate,
      isAuthenticated: false
    }
  }

  async componentDidMount(){
    this.configureGoogleSignIn();
  }

  configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: '130442303187-mn6eee3f8nj26ls8ike2685qoi2uk8gq.apps.googleusercontent.com',
      offlineAccess: false
    });
  }

  async storeToken (key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
    }
  };

  render() {

    const body = this.state.isAuthenticated ? this.renderSignOutButton() : this.renderSignInButton();
    return (
        <View style={[styles.container, { flex: 1 }]}>
          {body}
        </View>
    );
  }

  renderSignOutButton(){
    return (
        <View style={styles.container}>
          <Button onPress={this.signOut} title="Log out" />
        </View>
    );
  }

  renderSignInButton() {
    return (
        <View style={styles.container}>
          <GoogleSigninButton
              style={{ width: 212, height: 48 }}
              size={GoogleSigninButton.Size.Standard}
              color={GoogleSigninButton.Color.Auto}
              onPress={this.signIn}
          />
        </View>
    );
  }

  async goToProfile(){
    const userInfo = await GoogleSignin.getCurrentUser();
    this.state.navigate('ProfileView', {
      email: userInfo.email,
      name: userInfo.name,
      id: userInfo.id
    })
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo, error: null });
      const token = await GoogleSignin.getTokens();
      this.storeToken('google_token', JSON.stringify(token));
      this.goToProfile();

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert('cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        Alert.alert('Something went wrong', JSON.stringify(error));
        this.setState({
          error,
        });
      }
      this.state.navigate('HomeView');
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AuthView', () => AuthView);
