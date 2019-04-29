import { STORY_ARCHIVE } from '../constants/actionTypes'; 

const INITIAL_STATE = [] ; 
const applyArchieStory = (state,action) => {
    return [...state,action.objectID];
}
export const archiveReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case STORY_ARCHIVE: {
            console.log(action);
            const newState =  applyArchieStory(state,action);
            console.log(newState);
            return newState; 
        }
        default: return state; 
    }
}

export default archiveReducer ; 