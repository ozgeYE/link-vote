import linkReducer from "./linkReducer";
import {combineReducers} from 'redux';
import dialogReducer from "./dialogReducer";

const rootReducer= combineReducers({
    linkR: linkReducer,
    dialogR: dialogReducer
});

export default rootReducer;