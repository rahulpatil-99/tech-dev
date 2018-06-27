import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    title:'',
    subPoint:'',
    cards:[]
}
const store = createStore(reducer,initialState);

export default store;