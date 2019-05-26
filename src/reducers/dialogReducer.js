import {HIDE_DELETE_DIALOG, SHOW_ALERT, SHOW_DELETE_DIALOG, HIDE_ALERT} from "../actions/dialogAction";

const initialState = {
    showDeleteDialog: false,
    showAlert: false,
    link: null
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DELETE_DIALOG:
            console.log(action);
            return Object.assign({}, state, {showDeleteDialog: true, link: action.link});
        // return state;
        case HIDE_DELETE_DIALOG:
            return Object.assign({}, state, {showDeleteDialog: false, link: null});
        case SHOW_ALERT:
            return Object.assign({}, state, {showAlert: true, link: action.link, alertType: action.alertType});
        case HIDE_ALERT:
            return Object.assign({}, state, {showAlert: false});
        default:
            return state;
    }
};

export default dialogReducer;