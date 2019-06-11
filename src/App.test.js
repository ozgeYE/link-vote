import React from 'react';
import ConnectedApp, { App } from './App';
import LinkList from './components/LinkList';
import AddLinkForm from './components/AddLinkForm';
import {shallow} from 'enzyme';
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import {MemoryRouter} from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<App/>);

  return {
    enzymeWrapper
  }
}

describe('test component', () => {

  let element;

  beforeEach(() => {
    element = <App />
  });

  it('routes /linklist to linklist', () => {
    const component = shallow(element);
    expect(component.find('Route[exact=true][path="/"]').first().prop('component')).toBe(LinkList);
  });

  it('routes /addlinkform to add link form', () => {
    const component = shallow(element);
    expect(component.find('Route[path="/add-link"]').first().prop('component')).toBe(AddLinkForm);
  });
});