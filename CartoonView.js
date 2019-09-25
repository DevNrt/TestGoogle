import React from 'react';
import { AppRegistry, ScrollView, Text, Image, Button } from 'react-native';

export default class CartoonView extends React.Component {
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
            <ScrollView>
                <Text style={styles.title}>Historia gráfica</Text>
                <Image source={require("./images/cartoon_1.png")}/>
                <Image source={require("./images/cartoon_2.png")}/>
                <Button onPress={()=>{this.state.navigate('MisionDetailView', {mision: this.state.mision})}}
                title="Ir a la misión"/>
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
    }
};

AppRegistry.registerComponent('CartoonView', () => CartoonView);
