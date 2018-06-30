import React from 'react';
import { shallow } from 'enzyme';
import {Cards } from '../../src/components/Cards';

describe("testing Cards",()=>{
    it("should render cards component for empty list as cards",()=>{
        const component = shallow(<Cards cards={[]}/>);
        expect(component.find('h1')).toHaveLength(1);
        expect(component.find('h1').text()).toBe("Your Cards:");
        expect(component.find('h3')).toHaveLength(1);
        expect(component.find('h3').text()).toBe("No Cards");
    });
      
    it("should render given list of cards",()=>{
        const cards=[{"title":"first","subPoint":"first subpoint"},
                    {"title":"second","subPoint":"second subpoint"}];
        const component = shallow(<Cards cards={cards}/>);
        expect(component.props('cards')).toBeTruthy();
        expect(component.find('.first').text()).toBe("1. first first subpoint");
        expect(component.find('.second').text()).toBe("2. second second subpoint");
    })
});