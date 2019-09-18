import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraView from './CameraView';
import AuthView from './AuthView';
import HomeView from './HomeView';
import ProfileView from './ProfileView';
import MisionListView from './MisionListView';
import MisionDetailView from './MisionDetailView';
import CartoonView from './CartoonView';

const MainNavigator = createStackNavigator({
    HomeView: {screen: HomeView},
    CameraView: {screen: CameraView},
    AuthView: {screen: AuthView},
    ProfileView: {screen: ProfileView},
    MisionListView: {screen: MisionListView},
    MisionDetailView: {screen: MisionDetailView},
    CartoonView: {screen: CartoonView},

});

const App = createAppContainer(MainNavigator);

export default App;
