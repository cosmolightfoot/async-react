import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('characters tests', () => {
  it('snapshot test', () => {
    const wrapper = shallow(<Characters characters={[{ is:'array' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
