import * as types from '../actions/types';
import { combineReducers } from 'redux';

function favouriteUnisReducer(state = [], action) {
    if(action.type === types.FAVOURITE_UNI) {
        const favourites = [...state];

        favourites.push(action.pubukprn);

        return favourites;
    } else {
        return state;
    }
}

export default combineReducers({
    favouriteUnis: favouriteUnisReducer
})
