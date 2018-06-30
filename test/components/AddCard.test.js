import React from 'react';
import { shallow } from 'enzyme';
import { AddCard } from '../../src/components/AddCard';
global.td = require('testdouble');

describe("test AddCard",()=>{
    it("should render AddCard",()=>{
        const component = shallow(<AddCard />);
        expect(component.find('form')).toHaveLength(1);
        expect(component.find('input')).toHaveLength(3);
    });
    it("should trigger addTitle  action on change on title input",()=>{
        const addTitle = td.func();
        const component = shallow(<AddCard addTitle={addTitle}/>);
        const titleInput = component.find('.title-input');
        titleInput.simulate('change',{ target: { value: 'some title'}});
        td.verify(addTitle('some title'));
    });
    it("should trigger addPoint action on change on subtitle input",()=>{
        const addSubPoint = td.func();
        const component = shallow(<AddCard addSubPoint={addSubPoint}/>);
        const subPointInput = component.find('.subtitle-input');
        subPointInput.simulate('change',{ target: { value: 'some subtitle'}});
        td.verify(addSubPoint('some subtitle'));
    });
    it("should trigger saveCard action on click of submit input of form",()=>{
        const saveCard = td.func();
        const component = shallow(<AddCard saveCard={saveCard}/>);
        const form = component.find('.add-card-form');
        const event={
            "preventDefault":()=>{
                return "";
            }
        }
        form.simulate('submit',event);
        td.verify(saveCard());
    });
});