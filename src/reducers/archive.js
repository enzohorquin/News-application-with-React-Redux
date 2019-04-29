import { STORY_ARCHIVE } from '../constants/actionTypes'; 

const INITIAL_STATE = [] ; 
const applyArchieStory = (state,action) => {
    return [...state,action.objectID];
}
export const archiveReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case STORY_ARCHIVE: {
            
            const newState =  applyArchieStory(state,action);
           
            return newState; 
        }
        default: return state; 
    }
}

export default archiveReducer ; 