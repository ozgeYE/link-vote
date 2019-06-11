import React from 'react';
import ConnectedLinkList, {LinkList} from './LinkList';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import Enzyme from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

Enzyme.configure({adapter: new Adapter()});

function setup() {
  const enzymeWrapper = shallow(<LinkList/>);

  return {
    enzymeWrapper
  }
}

describe('test component', () => {

  const sortAsc = jest.fn();
  const sortDesc = jest.fn();

  const initialState = {
    links: [
      {id: 1, name: 'name', url: 'url', point: 0},
      {id: 2, name: 'name2', url: 'url2', point: 2},
      {id: 3, name: 'name3', url: 'url3', point: 3},
    ]
  };
  let element;
  let store;

  beforeEach(() => {
    store = configureStore()(initialState);
    element = shallow(<LinkList links={initialState} sortAsc={sortAsc} sortDesc={sortDesc}/>);
  });

  it('should call the mock login function', () => {
    element.find('#asc').simulate(
      'click',
      {preventDefault() {}}
    );
    expect(sortAsc.mock.calls.length).toBe(1)
  })

});