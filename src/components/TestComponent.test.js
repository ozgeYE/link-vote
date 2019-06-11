import React from 'react';
import TestComponent from './TestComponent';
import {shallow} from 'enzyme';
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import jest from  'jest';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<TestComponent/>);

  return {
    enzymeWrapper
  }
}

describe('test component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('div').hasClass('header')).toBe(true);
  })

});