import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../src/components/Card';

describe('<Card />', () => {
  it('renders without crashing', () => {
    shallow(<Card />)
  })
})