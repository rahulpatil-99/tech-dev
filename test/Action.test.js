import {saveCardTitle,saveSubPoint,addCard} from '../src/actions';
global.td = require('testdouble');

describe("testing Actions",()=>{
    it("should return type as SAVE_CARD_TITLE with given title in data",()=>{
        const actual = saveCardTitle('save trees');
        const expected = {
            type:"SAVE_CARD_TITLE",
            data:{
                title:'save trees'
            }
        };
        expect(actual).toEqual(expected);
    });

    it("should return type as SAVE_SUB_POINT with given point in data",()=>{
        const actual = saveSubPoint('save plants');
        const expected = {
            type:"SAVE_SUB_POINT",
            data:{
                point:'save plants'
            }
        };
        expect(actual).toEqual(expected);
    });

    it("should return type as ADD_CARD with no data",()=>{
        const actual = addCard();
        const expected = {
            type:"ADD_CARD"
        };
        expect(actual).toEqual(expected);
    });
});