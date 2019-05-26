import {
    SHOW_ALERT,
    SHOW_DELETE_DIALOG,
    HIDE_ALERT,
    HIDE_DELETE_DIALOG,
    showDeleteDialog,
    hideDeleteDialog,
    showAlert,
    hideAlert
} from './dialogAction';

describe('dialog actions', () => {
    it('should show delete dialog', () => {
        const link =  {
            name: 'name',
            url: 'url',
            point: 0,
            id: new Date().getTime()
        };
        const expectedAction = {
            type: SHOW_DELETE_DIALOG,
            link
        };
        expect(showDeleteDialog(link)).toEqual(expectedAction)
    });

    it('should hide delete dialog', () => {
        const expectedAction = {
            type: HIDE_DELETE_DIALOG
        };
        expect(hideDeleteDialog()).toEqual(expectedAction)
    });

    it('should show alert', () => {
        const link =  {
            name: 'name',
            url: 'url',
            point: 0,
            id: new Date().getTime()
        };

        const alertType="add";
        const expectedAction = {
            type: SHOW_ALERT,
            link,
            alertType
        };
        expect(showAlert(link, alertType)).toEqual(expectedAction)
    });

    it('should hide alert', () => {
        const expectedAction = {
            type: HIDE_ALERT,
        };
        expect(hideAlert()).toEqual(expectedAction)
    });
});