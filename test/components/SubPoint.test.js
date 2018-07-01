import React from 'react';
import {SubPoint } from '../../src/components/SubPoint';
import {shallow} from 'enzyme';
global.td=require('testdouble');

describe("testing SubPoint",()=>{
    it("should render SubPoint",()=>{
        const component = shallow(<SubPoint subPoints={[]}/>);
        expect(component.find(".subpoints")).toBeTruthy();
        expect(component.find("button")).toBeTruthy();
    });
    it("should trigger addSubPoint onClick of Add New button",()=>{
        const addSubPoint = td.func();
        const component = shallow(<SubPoint subPoints={[]} addSubPoint={addSubPoint} />);
        component.find("button").simulate('Click');
        td.verify(addSubPoint());
    });

    it("should trigger saveSubPoint onChange of subpoint input",()=>{
        const saveSubPoint = td.func();
        const component = shallow(<SubPoint subPoints={[""]} saveSubPoint={saveSubPoint} />);
        component.find(".input-0").simulate('change',{ target: { value: 'some subtitle'}})
        td.verify(saveSubPoint("some subtitle",0));
    });
})