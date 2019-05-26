import linkReducer from './linkReducer';
import {ADD_LINK, DELETE_LINK, DOWN_VOTE, SORT_LINK_ASC,SORT_LINK_DESC, UP_VOTE} from "../actions/linkAction";

describe('link reducer', () => {
    it('should handle add link', () => {
        expect(
            linkReducer({links: []}, {
                type: ADD_LINK,
                link: {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }
            })
        ).toEqual(
            {
                links: [
                    {
                        name: "link name",
                        url: "link url",
                        id: 1,
                        point: 0
                    }
                ]
            }
        );
    });

    it('should handle delete link', () => {
        expect(
            linkReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }]
            }, {
                type: DELETE_LINK,
                linkId: 1
            })
        ).toEqual(
            {
                links: []
            }
        );
    });

    it('should handle up vote link', () => {
        expect(
            linkReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 0
                }]
            }, {
                type: UP_VOTE,
                linkId: 1
            })
        ).toEqual(
            {
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 1
                }]
            }
        );
    });

    it('should handle down vote link', () => {
        expect(
            linkReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 2
                }]
            }, {
                type: DOWN_VOTE,
                linkId: 1
            })
        ).toEqual(
            {
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 1
                }]
            }
        );
    });

    it('should sort asc link', () => {
        expect(
            linkReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 2
                }, {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 3
                }]
            }, {
                type: SORT_LINK_ASC,
                linkId: 1
            })
        ).toEqual(
            {
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 3
                }, {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 2
                }]
            }
        );
    });

    it('should sort desc link', () => {
        expect(
            linkReducer({
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 2
                }, {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 3
                }]
            }, {
                type: SORT_LINK_DESC,
                linkId: 1
            })
        ).toEqual(
            {
                links: [{
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 2
                }, {
                    name: "link name",
                    url: "link url",
                    id: 1,
                    point: 3
                }]
            }
        );
    });
});