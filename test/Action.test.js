import {saveCardTitle,saveSubPoint,addCard, addNewPoint} from '../src/actions';
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
        const actual = saveSubPoint('save plants',0);
        const expected = {
            type:"SAVE_SUB_POINT",
            data:{
                point:'save plants',
                index:0
            }
        };
        expect(actual).toEqual(expected);
    });

    it("should return type as ADD_NEW_POINT with no data",()=>{
        const actual = addNewPoint();
        const expected = {
            type:"ADD_NEW_POINT"
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