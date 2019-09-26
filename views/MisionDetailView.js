import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import {ListItem} from "react-native-elements";

export default class MisionDetailView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            mision: this.props.navigation.getParam('mision')
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.state.mision.title}</Text>
                <Text style={styles.description}>{this.state.mision.description}</Text>
                <Text style={styles.subtitle}>Actividades</Text>

                <View>
                    {
                        this.state.mision.activities.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.description}
                                topDivider
                                chevron = { !item.completed }
                                checkmark = { item.completed }
                                disabled={item.completed}
                                onPress={() => { this.state.navigate('EvidenceView', {mision: this.state.mision, activity: item.id}) }}
                            />
                        ))
                    }
                </View>
            </View>

        );
    }
}

const styles = {
    title: {
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    description:{
        fontSize: 20,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    subtitle: {
        fontSize: 26,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    }
};

AppRegistry.registerComponent('MisionDetailView', () => MisionDetailView);
