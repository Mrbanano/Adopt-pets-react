import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import App from './routes/App';
import setUSer from './actions'

//const initalState ={};
//const store = createStore( reducer, initalState);
 
ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>,

document.getElementById('app')
);