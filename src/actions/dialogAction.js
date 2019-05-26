export const SHOW_DELETE_DIALOG= "SHOW_DELETE_DIALOG";
export const HIDE_DELETE_DIALOG= "HIDE_DELETE_DIALOG";


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