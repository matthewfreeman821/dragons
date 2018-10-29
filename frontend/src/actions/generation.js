import { GENERATION } from './types';

export const generationActionCreator = (payload) => {
    return {
        type: GENERATION_ACTION_TYPE,
        generation: payload
    };
}

const fetchGeneration = () => dispatch => {
    return fetch('http://localhost:3000/generation')
        .then(response => response.json())
        .then(json => {
            dispatch(generationActionCreator(json.generation))
        })
        .catch(error => console.error('error', error));
}