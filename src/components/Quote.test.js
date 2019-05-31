import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote snapshot test', () => {
  it('snapshots', () => {
    const wrapper = shallow(<Quote character="bender" quote="bite me" image="www.url.com" />);
    expect(wrapper).toMatchSnapshot();
  });
});
