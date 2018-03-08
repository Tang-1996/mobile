import React from 'react';
import { StyleSheet, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './components/WelcomeScreen';


const App = StackNavigator(
    {
        WelcomeScreen: { screen: WelcomeScreen },
    },
    {
        headerMode: "float",
        navigationOptions: {
            headerTitle: "UniNinja",
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

// skip this line if using Create React Native App
AppRegistry.registerComponent('UniNinja', () => App);

export default App;
