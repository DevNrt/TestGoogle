import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CameraView from './views/CameraView';
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
import ProfileView from './views/ProfileView';
import MisionListView from './views/MisionListView';
import MisionDetailView from './views/MisionDetailView';
import CartoonView from './views/CartoonView';
import EvidenceView from './views/EvidenceView';
import SettingsView from './views/SettingsView';

const MainNavigator = createStackNavigator({
    HomeView: {screen: HomeView},
    CameraView: {screen: CameraView},
    AuthView: {screen: AuthView},
    ProfileView: {screen: ProfileView},
    MisionListView: {screen: MisionListView},
    MisionDetailView: {screen: MisionDetailView},
    CartoonView: {screen: CartoonView},
    EvidenceView: {screen: EvidenceView},
    SettingsView: {screen: SettingsView},
});

const App = createAppContainer(MainNavigator);

export default App;
