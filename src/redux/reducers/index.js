import { combineReducers  } from "redux";
import unitsReducer from "./unitsReducer";

const reducers = combineReducers({
    units: unitsReducer
});

export default reducers;