import ActionTypes from "../actionTypes";

const initialState = [];

const unitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.unit.SET_UNITS:
            return action.payload;
        default:
            return state;
    }
};

export default unitsReducer;