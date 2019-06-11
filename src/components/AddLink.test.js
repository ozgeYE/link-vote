import React from 'react'
import Enzyme, { shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddLink from './AddLink';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        addLink: jest.fn()
    };

    const enzymeWrapper = shallow(<AddLink {...props} />);

    return {
        enzymeWrapper,
        props
    }
}

describe('components', () => {
    const initialState= {
        links: [
            {id:1, name: 'name', url: 'url', point: 0}
        ]
    };
    const mockStore= configureStore();
    let store, wrapper;

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    });


    describe('Add Link', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('div').hasClass('add-link-container')).toBe(true);
        })

    })
});