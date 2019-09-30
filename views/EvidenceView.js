import React from 'react';
import {AppRegistry, ScrollView, Text, Button, TextInput, Alert, Image} from 'react-native';
import { Icon } from 'react-native-elements';

export default class EvidenceView extends React.Component {
    static navigationOptions = {
        title: 'Evoke'
    };
    constructor(props) {
        super(props);
        this.state = {
            navigate: this.props.navigation.navigate,
            mision: this.props.navigation.getParam('mision'),
            activity: this.props.navigation.getParam('activity')
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {pathPhoto: nextProps.navigation.getParam('pathPhoto')};
    }

    render() {
        return (
            <ScrollView>
                <Text style={styles.title}>Evidencia Actividad {this.state.activity}</Text>
                { (this.state.pathPhoto) ?
                    <Image style={{width: 200, height: 200}} source={{uri: this.state.pathPhoto, isStatic:true}}/> :
                    <Icon
                        reverse
                        name='ios-camera'
                        type='ionicon'
                        color='#517fa4'
                        size={40}
                        onPress={() => {this.state.navigate('CameraView', {mision: this.state.mision, activity: this.state.activity})} }
                    />

                }

                <TextInput
                    style={styles.textInput}
                    placeholder="Descripción de la evidencia"
                />
                <Button title='Enviar' onPress={() => this.state.navigate('MisionDetailView', {mison: this.state.mision})}/>
            </ScrollView>
        );
    }
}

const styles = {
    title:{
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 10
    },
    camera:{
        fontSize: 40
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        marginBottom: 30
    }
};

AppRegistry.registerComponent('EvidenceView', () => EvidenceView);
