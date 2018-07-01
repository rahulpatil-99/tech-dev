import React from 'react';
import { shallow } from 'enzyme';
import { AddCard } from '../../src/components/AddCard';
global.td = require('testdouble');

describe("test AddCard",()=>{
    it("should render AddCard",()=>{
        const component = shallow(<AddCard />);
        expect(component.find('form')).toHaveLength(1);
        expect(component.find('input')).toHaveLength(2);
        expect(component.find('SubPoint')).toHaveLength(1);
    });
    it("should trigger saveTitle  action on change on title input",()=>{
        const saveTitle = td.func();
        const component = shallow(<AddCard saveTitle={saveTitle}/>);
        const titleInput = component.find('.title-input');
        titleInput.simulate('change',{ target: { value: 'some title'}});
        td.verify(saveTitle('some title'));
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