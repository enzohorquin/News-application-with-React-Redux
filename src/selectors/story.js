export const getReadableStories = ({storyState,archiveState}) => {
    return storyState.filter((story) => {
        return archiveState.indexOf(story.objectID) === -1; 
    })
}

export default getReadableStories ; 