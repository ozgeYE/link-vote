export const GET_LINKS = "GET_LINKS";
export const ADD_LINK = "ADD_LINK";
export const DELETE_LINK = "REMOVE_LINK";
export const UP_VOTE = "UP_VOTE";
export const DOWN_VOTE = "DOWN_VOTE";
export const SORT_LINK_ASC = "SORT_LINK_ASC";
export const SORT_LINK_DESC = "SORT_LINK_DESC";

export const getLinks = (currentPage) => {
    return {
        type: GET_LINKS,
        currentPage
    }
};

export const addLink = (link) => {
    return {
        type: ADD_LINK,
        link
    }
};

export const deleteLink = (linkId) => {
    return {
        type: DELETE_LINK,
        linkId
    }
};

export const upVote = (linkId) => {
    return {
        type: UP_VOTE,
        linkId
    }
};

export const downVote = (linkId) => {
    return {
        type: DOWN_VOTE,
        linkId
    }
};

export const sortLinksAsc = () => {
    return {
        type: SORT_LINK_ASC
    }
};

export const sortLinksDesc = () => {
    return {
        type: SORT_LINK_DESC,
    }
};