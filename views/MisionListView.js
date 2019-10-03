import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import StringsLanguage from '../utils/StringsLanguage';

export default class MisionDetailView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            list: [
                {
                    id: 1,
                    title: 'Misión 1',
                    description: 'Descripción de la misión 1',
                    advance: 15,
                    activities: [
                        {
                            id: 1,
                            description: 'Descripción de la actividad 1',
                            completed: true
                        },
                        {
                            id: 2,
                            description: 'Descripción de la actividad 2',
                            completed: false
                        },
                        {
                            id: 3,
                            description: 'Descripción de la actividad 3',
                            completed: false
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Misión 2',
                    description: 'Descripción de la misión 2',
                    advance: 15,
                    activities: [
                        {
                            id: 4,
                            description: 'Descripción de la actividad 1',
                            completed: true
                        },
                        {
                            id: 5,
                            description: 'Descripción de la actividad 2',
                            completed: true
                        },
                        {
                            id: 6,
                            description: 'Descripción de la actividad 3',
                            completed: false
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Misión 3 ',
                    description: 'Descripción de la misión 3',
                    advance: 15,
                    activities: [
                        {
                            id: 7,
                            description: 'Descripción de la actividad 1',
                            completed: true
                        },
                        {
                            id: 8,
                            description: 'Descripción de la actividad 2',
                            completed: false
                        },
                        {
                            id: 9,
                            description: 'Descripción de la actividad 3',
                            completed: true
                        }
                    ]
                },
            ]
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>{StringsLanguage.title_section_mission_list}</Text>
                {
                    this.state.list.map((item, i) => (
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
