import * as types from '../actions/ActionTypes';

const initialState = {
    name: ''
};

export default function name(state = initialState, action) {
    if(action.type === types.SUBMIT_VALUE) {
        return {
            name: action.submitVal
        };
    } else {
        return state;
    }
}
