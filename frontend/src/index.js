import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import './index.css';

const store = createStore(generationReducer);

store.subscribe(() => console.log('store state update', store.getState()));

console.log('store', store);

store.dispatch({ type: 'foo' });
store.dispatch({ 
    type: GENERATION_ACTION_TYPE,
    generation: { generationId: 'goo', expiration: 'bar'}
});

console.log('store.getState()', store.getState());

const zooAction = generationActionCreator({
    generationId: 'zoo', expiration: 'bar'
});

store.dispatch(zooAction);

fetch('http://localhost:3000/generation')
    .then(response => response.json())
    .then(json => {
        store.dispatch(generationActionCreator(json.generation))
    });

render(
    <div>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
    </div>,
    document.getElementById('root')
);