import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

// Only create this logger if we are in development mode.
//const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

// function configureStore(initialState) {
// 	const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
// 	return createStore(reducer, initialState, enhancer);
// }
//
// const store = configureStore({});


//Creates the store with the root reducer (must use combineReducers if multiple reduces present)
const store = createStore(reducer, initialState);
//Console logs any state changes
store.subscribe(() => {
  console.log("Store is now", store.getState())
})

const App = () => (
	<Provider store={store}>
		<AppContainer />
	</Provider>
);

AppRegistry.registerComponent('UniNinja', () => App);
