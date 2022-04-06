import ActionTypes from "../actionTypes";

const setUnits = (units) => ({
    type: ActionTypes.unit.SET_UNITS,
    payload: units
});

const getUnits = () => ({
    type: ActionTypes.unit.GET_UNITS
});

const unitActions = {
    setUnits,
    getUnits,
};

export default unitActions;