import { combineReducers } from 'redux';
import * as unisReducer from './unis';

export default combineReducers(Object.assign(unisReducer));
