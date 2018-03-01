import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './components/WelcomeScreen';


const App = StackNavigator(
    {
        WelcomeScreen: { screen: WelcomeScreen },
    },
    {
        headerMode: "float",
        navigationOptions: {
            headerTitle: "uni ninja",
            headerTintColor: "#1a64db",
        },
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
