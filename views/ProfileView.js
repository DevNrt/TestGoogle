import React from 'react';
import { AppRegistry, Image, View, Text, TouchableHighlight } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import StringsLanguage from '../utils/StringsLanguage';
import { Icon } from 'react-native-elements';

export default class ProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            userInfo: {},
            evocoins: 0
        }
    }

    static navigationOptions = {
        drawerLabel: 'Home'
    };

    async componentDidMount(): void {
        const userInfo = await GoogleSignin.getCurrentUser();
        this.setState({userInfo: userInfo.user});
        this.getEvocoins();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
                <View style={styles.container_username}>
                    <Text style={styles.username}> {(!!this.state.userInfo.name) ? this.state.userInfo.name : 'Ha ocurrido un problema' } </Text>
                </View>
                <View>
                    <View>
                        <Image
                            style={styles.avatar}
                            source={require('../images/avatar.png')}
                        />
                    </View>

                    <View style={styles.container_skill_1}>
                        <Image
                            style={styles.skill}
                            source={require('../images/skill_1.png')}
                        />
                    </View>
                    <View style={styles.container_skill_2}>
                        <Image
                            style={styles.skill}
                            source={require('../images/skill_2.png')}
                        />
                    </View>
                    <View style={styles.container_skill_3}>
                        <Image
                            style={styles.skill}
                            source={require('../images/skill_3.png')}
                        />
                    </View>
                    <View style={styles.container_settings}>
                        <Icon
                            reverse
                            name='ios-settings'
                            type='ionicon'
                            color='#517fa4'
                            size={23}
                            onPress={() => {this.state.navigate('SettingsView')} }
                        />
                    </View>
                </View>
                <View style={styles.container_buttons}>
                    <View style={styles.item}>
                        <Text style={styles.text_buttons}>Evocoins {"\n"} {this.state.evocoins}</Text>
                    </View>
                    <TouchableHighlight style={styles.item} onPress={() => this.state.navigate('MisionListView')}>
                        <View>
                            <Text style={styles.text_buttons}>{StringsLanguage.view_missions_button}</Text>
                        </View>
                    </TouchableHighlight >
                </View>
            </View>
        );
    }

    getEvocoins(){
        fetch('/evocoin/balanceOf', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.userInfo.email
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({evocoins: responseJson.evocoins});
            })
            .catch((error) => {
                this.setState({evocoins: 0});
                console.log(error);
            });
    }
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#666666'
    },
    container_username:{
        width: '100%',

    },
    username: {
        marginTop: 10,
        color: '#fff',
        textAlign: 'right',
        width: '100%',
        paddingRight: 10
    },
    avatar:{
        height: 200,
        width: 200,
        marginTop: 40
    },
    container_skill_1: {
        position: 'absolute',
        left: -40,
        top: 40
    },
    container_skill_2: {
        position: 'absolute',
        left: -60,
        top: 110
    },
    container_skill_3: {
        position: 'absolute',
        left: -50,
        top: 180
    },
    skill:{
        height: 70,
        width: 50,
    },
    container_buttons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 30
    },
    item:{
        width: '48%',
        alignItems: 'center',
        marginLeft: '1%',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderRadius: 4,
        minHeight: 90
    },
    text_buttons: {
        fontSize: 31,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container_settings: {
        position: 'absolute',
        right: -50,
        top: 180
    }
};

AppRegistry.registerComponent('ProfileView', () => ProfileView);
