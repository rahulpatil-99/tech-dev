import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';


const initialState = {
    title:'',
    subPoints:[],
    cards:[]
}
const store = createStore(reducer,initialState);

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('app')
);

