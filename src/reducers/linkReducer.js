import {
    ADD_LINK,
    DELETE_LINK,
    DOWN_VOTE,
    UP_VOTE,
    GET_LINKS,
    SORT_LINK_DESC,
    SORT_LINK_ASC
} from "../actions/linkAction";

const initialState = {
    links: [
        {id: 1, name: 'amazon', url: 'http://amazon.com', point: 2},
        {id: 2, name: 'google', url: 'http://google.com', point: 3},
        {id: 3, name: 'instagram', url: 'http://instargam.com', point: 5},
        {id: 4, name: 'facebook', url: 'http://facobook.com', point: 6},
        {id: 5, name: 'iphone', url: 'http://iphone.com', point: 1},
        {id: 6, name: 'samsung', url: 'http://samsung.com', point: 8},
    ]
};

localStorage.setItem('links', JSON.stringify(initialState));

const is = JSON.parse(localStorage.getItem('links'));


const linkReducer = (state = is, action) => {
    switch (action.type) {
        case ADD_LINK:
            const links = state.links.concat(action.link);
            return Object.assign({}, state, {links: links});
        case DELETE_LINK:
            const filteredLinks = state.links.filter(l => l.id !== action.linkId);
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
            const currentPage = action.currentPage;
            const d = JSON.parse(localStorage.getItem('links'));
            const splicedLink = d.links.splice((currentPage - 1) * 5, 5);
            return Object.assign({}, state, {links: splicedLink});

        case SORT_LINK_ASC:
            sessionStorage.setItem('sort', 'asc');
            const sortASC = state.links.sort((a, b) => (a.point > b.point) ? -1 : ((b.point > a.point) ? 1 : 0));
            return Object.assign({}, state, {links: sortASC});

        case SORT_LINK_DESC:
            sessionStorage.setItem('sort', 'desc');
            const sortDESC = state.links.sort((a, b) => (a.point > b.point) ? 1 : ((b.point > a.point) ? -1 : 0));
            return Object.assign({}, state, {links: sortDESC});
        default:
            return state;
    }
};

export default linkReducer;