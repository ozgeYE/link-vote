export const SHOW_DELETE_DIALOG= "SHOW_DELETE_DIALOG";
export const HIDE_DELETE_DIALOG= "HIDE_DELETE_DIALOG";
export const SHOW_ALERT= "SHOW_ALERT";
export const HIDE_ALERT= "HIDE_ALERT";


export const showDeleteDialog = (link) => {
    return {
        type: SHOW_DELETE_DIALOG ,
        link
    }
};

export const hideDeleteDialog = () => {
    return {
        type: HIDE_DELETE_DIALOG ,
    }
};

export const showAlert = (link, alertType) => {
    return {
        type: SHOW_ALERT ,
        link,
        alertType
    }
};

export const hideAlert = () => {
    return {
        type: HIDE_ALERT ,
    }
};