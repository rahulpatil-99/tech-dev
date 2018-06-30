import React from 'react';
import { shallow } from 'enzyme';
import { ActivityWindow } from '../../src/components/ActivityWindow';
global.td = require('testdouble');

describe("testing ActivityWindow",()=>{
    it("should render Addcard",()=>{
        const component = shallow(<ActivityWindow />);
        expect(component.find('AddCard')).toBeTruthy();
    });
    it("should pass given props to AddCard",()=>{
        const addTitle = td.func();
        const addSubPoint = td.func();
        const component = shallow(<ActivityWindow addTitle={addTitle} addSubPoint={addSubPoint}/>);
        const AddCard = component.find('AddCard')
        expect(AddCard.props('addTitle')).toBeTruthy();
        expect(AddCard.props('addSubTitle')).toBeTruthy();
    });
});