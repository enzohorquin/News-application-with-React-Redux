import STORY_ARCHIVE from '../constants/actionTypes'; 

export const doArchiveStory = (id) => {
    return {
        type: STORY_ARCHIVE,
        objectID:id
    }
}
export default doArchiveStory ;