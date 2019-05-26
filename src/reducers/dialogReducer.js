import {HIDE_DELETE_DIALOG, SHOW_DELETE_DIALOG} from "../actions/dialogAction";

const initialState = {
    showDeleteDialog: false
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DELETE_DIALOG:
            return Object.assign({}, state, {showDeleteDialog: true});
        case HIDE_DELETE_DIALOG:
            return Object.assign({}, state, {showDeleteDialog: false});
        default:
            return state;
    }
};

export default dialogReducer;