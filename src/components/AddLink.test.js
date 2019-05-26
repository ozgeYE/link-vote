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
    describe('Add Link', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('div').hasClass('add-link-container')).toBe(true);
        })

    })
});