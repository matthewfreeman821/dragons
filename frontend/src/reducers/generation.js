import { GENERATION } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_GENERATION = { generationId: '', expiration: '' }

//This is used to so my reducer fucntion can handle the three different states the fetch could be in
const generationReducer = (state = DEFAULT_GENERATION, action) => {
    switch(action.type) {
        case GENERATION.FETCH:
            return { ...state, status: fetchStates.fetching };
        case GENERATION.FETCH_ERROR:
            return { ...state, status: fetchStates.error, message: action.message };
        case GENERATION.FETCH_SUCCESS:
            return { ...state, status: fetchStates.success, ...action.generation };
        default:
            return state;
    }
}

export default generationReducer;