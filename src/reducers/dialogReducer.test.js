import linkReducer from './linkReducer';
import {ADD_LINK, DELETE_LINK, DOWN_VOTE, SORT_LINK_ASC,SORT_LINK_DESC, UP_VOTE} from "../actions/linkAction";
import dialogReducer from "./dialogReducer";
import {HIDE_ALERT, HIDE_DELETE_DIALOG, SHOW_ALERT, SHOW_DELETE_DIALOG} from "../actions/dialogAction";

const initialState = {
    showDeleteDialog: false,
    showAlert: false,
    link: null
};

describe('link reducer', () => {
    it('should show delete dialog', () => {
        expect(
            dialogReducer(initialState, {
                type: SHOW_DELETE_DIALOG,
                link: {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }
            })
        ).toEqual(
            {
                showDeleteDialog: true,
                showAlert: false,
                link: {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }
            }
        );
    });

    it('should hide delete dialog', () => {
        expect(
            dialogReducer(initialState, {
                type: HIDE_DELETE_DIALOG
            })
        ).toEqual(
            {
                showDeleteDialog: false,
                showAlert: false,
                link: null
            }
        );
    });

    it('should show alert', () => {
        expect(
            dialogReducer(initialState, {
                type: SHOW_ALERT,
                link: {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                },
                alertType: 'asc'
            })
        ).toEqual(
            {
                showDeleteDialog: false,
                showAlert: true,
                link: {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                },
                alertType:'asc'
            }
        );
    });

    it('should hide alert dialog', () => {
        expect(
            dialogReducer(initialState, {
                type: HIDE_ALERT
            })
        ).toEqual(
            {
                showAlert: false,
                link: null,
                showDeleteDialog: false
            }
        );
    });
});