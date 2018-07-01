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
        const cards=[{"title":"first","subPoints":[]},
                    {"title":"second","subPoints":[]}];
        const component = shallow(<Cards cards={cards}/>);
        expect(component.props('cards')).toBeTruthy();
        expect(component.find('.first').text()).toBe("1. first ");
        expect(component.find('.second').text()).toBe("2. second ");
    });

    it("should render given list of cards with given subPoint",()=>{
        const cards=[{"title":"first","subPoints":["one","two"]},
                    {"title":"second","subPoints":["three","four","five"]}];
        const component = shallow(<Cards cards={cards}/>);
        expect(component.props('cards')).toBeTruthy();
        expect(component.find('.first').text()).toBe("1. first one two ");
        expect(component.find('.second').text()).toBe("2. second three four five ");
    });
});