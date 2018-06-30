import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/components/App';
global.td = require('testdouble');

describe('App test',()=>{
    it('should render ActiveWindow',()=>{
        const component = shallow(<App />);
        expect(component.find('ActiveWindow')).toBeTruthy();
        expect(component.find('main')).toBeTruthy();
    })
});