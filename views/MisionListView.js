import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import StringsLanguage from '../utils/StringsLanguage';
import MissionsData from '../data/missions';
import AsyncStorage from "@react-native-community/async-storage";

export default class MisionDetailView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            list: MissionsData,
            language: null
        }
    }

    componentDidMount(): void {
        AsyncStorage.getItem('language').then((language) => this.setState({language}));
    }

    render() {
        let missionList = this.state.list.filter( mission => mission['tags'].includes(this.state.language) );
        return (
            <View>
                <Text style={styles.title}>{StringsLanguage.title_section_mission_list}</Text>
                {
                    missionList.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            topDivider
                            chevron
                            onPress={() => { this.state.navigate('CartoonView', {mision: item}) }}
                        />
                    ))
                }
            </View>
        );
    }
}

const styles = {
    title:{
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    }
};

AppRegistry.registerComponent('MisionDetailView', () => MisionDetailView);
