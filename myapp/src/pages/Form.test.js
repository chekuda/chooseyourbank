import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Home from './Home';

import Header from '../components/Header';

describe('Home', () => {
	it('Header is rendered', () => {
		const wrapper = mount(<Home/>);
		expect(wrapper.find(Header).length).toEqual(1);
	})
})