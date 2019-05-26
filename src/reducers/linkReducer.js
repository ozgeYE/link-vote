import {
    ADD_LINK,
    DELETE_LINK,
    DOWN_VOTE,
    UP_VOTE,
    GET_LINKS,
} from "../actions/linkAction";

const initialState = {
    links: [
        {id: 1, name: 'amazon', url: 'http://amazon.com', point: 2},
        {id: 2, name: 'google', url: 'http://google.com', point: 3},
        {id: 3, name: 'huawei 1', url: 'http://huawei.com', point: 5},
        {id: 4, name: 'huawei2', url: 'http://huawei.com', point: 5},
        {id: 5, name: 'huawei3', url: 'http://huawei.com', point: 5},
        {id: 6, name: 'huawei4', url: 'http://huawei.com', point: 5},
        {id: 7, name: 'huawei5', url: 'http://huawei.com', point: 5},
        {id: 8, name: 'huawei6', url: 'http://huawei.com', point: 5},
        {id: 9, name: 'huawei7', url: 'http://huawei.com', point: 5},
    ]
};

localStorage.setItem('links', JSON.stringify(initialState));


const linkReducer = (state = {links: []}, action) => {
    switch (action.type) {
        case ADD_LINK:
            const links = state.links.concat(action.link);
            return Object.assign({}, state, {links: links});
        case DELETE_LINK:
            const filteredLinks = state.links.filter(l => l.id !== action.linkId);
            console.log(filteredLinks);
            return Object.assign({}, state, {links: filteredLinks});
        case UP_VOTE:
            const upVoteLink = state.links.map(l => {
                if (l.id === action.linkId) {
                    l.point += 1;
                }
                return l;
            });
            return Object.assign({}, state, {links: upVoteLink});
        case DOWN_VOTE:
            const downVoteLink = state.links.map(l => {
                if (l.id === action.linkId) {
                    l.point -= 1;
                }
                return l;
            });

            return Object.assign({}, state, {links: downVoteLink});
        case GET_LINKS:
            const currentPage= action.currentPage;
            const sliceLink= state.links.splice((currentPage-1)*5, 4);
            console.log(sliceLink);
            return Object.assign({}, state, {links: sliceLink});

        // case SORT_LINK_ASC:
        //     const sortASC=state.links.sort((a,b) => (a.point > b.point) ? 1 : ((b.point > a.point) ? -1 : 0));
        //     return Object.assign({}, state, {links: sortASC});
        //
        // case SORT_LINK_DESC:
        //     const sortDESC=state.links.sort((a,b) => (a.point > b.point) ? -1 : ((b.point > a.point) ? 1 : 0));
        //     return Object.assign({}, state, {links: sortDESC});
        default:
            const data = JSON.parse(localStorage.getItem('links'));
            console.log(data);
            return data;
    }
};

export default linkReducer;