import createReducer from '../lib/create_reducer';
import * as types from '../actions/types';

export const unis = createReducer({}, {
    [types.FETCH_UNIS](state, action) {
        let newState = {};
        action.unis.forEach( (uni) => {
            newState[uni.id] = uni;
        });
        return newState;
    }
});
