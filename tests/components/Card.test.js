import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../src/components/Card';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';

configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Card />);
    wrapper.setProps(
      {
        name: "steph",
        email: "stephanie@gmail.com",
        id: 88
      });

  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

})