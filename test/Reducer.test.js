import reducer from '../src/reducer';
import {saveCardTitle, addNewPoint, saveSubPoint, addCard} from '../src/actions';

describe("testing Reducer",()=>{
    it("should return previous state for default or unknown action",()=>{
        const state={title:"hello"};
        const action = {};
        const newState = reducer(state,action);
        expect(newState).toEqual(state);
    });

    it("should add title",()=>{
        const state={title:''};
        const action = saveCardTitle("some title");
        const newState = reducer(state,action);
        const expected = {title:"some title"};
        expect(newState).toEqual(expected);
    });

    it("should add new point",()=>{
        const state={subPoints:["sample"]};
        const action = addNewPoint();
        const newState = reducer(state,action);
        const expected = {subPoints:["sample",""]};
        expect(newState).toEqual(expected);
    });

    it("should save sub point",()=>{
        const state={subPoints:["sample",""]};
        const action = saveSubPoint("some subpoint",1);
        const newState = reducer(state,action);
        const expected = {subPoints:["sample","some subpoint"]};
        expect(newState).toEqual(expected);
    });

    it("should add card",()=>{
        const state={title:"some title",subPoints:["some subpoint"],cards:[]};
        const action = addCard();
        const newState = reducer(state,action);
        const expected = {title:"",subPoints:[],cards:[{title:"some title",subPoints:["some subpoint"]}]};
        expect(newState).toEqual(expected);
    });
});