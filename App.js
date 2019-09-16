import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraView from './CameraView';
import AuthView from './AuthView';

const MainNavigator = createStackNavigator({
    CameraView: {screen: CameraView},
    AuthView: {screen: AuthView},
});

const App = createAppContainer(MainNavigator);

export default App;
