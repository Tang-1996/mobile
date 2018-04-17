import * as types from './types';

export function favouriteUni(pubukprn) {
    return { type: types.FAVOURITE_UNI, pubukprn }
}

// UI actions

export function selectTab(index) {
    return { type: types.SELECT_TAB, index }
}