import React from 'react';
import './Story.css';
import ButtonInline from './Button'

export const Story = (props) => {

    const {
        url,
        title,
        author,
        num_comments,
        points,
        objectID
    } = props.story ;

    const COLUMNS = props.columns ;
    return (
        <div className="story">
                <span style={{ width:COLUMNS.title.width }} >
                     <a href={url}>{title}</a>
                 </span>
                <span style={{ width:COLUMNS.author.width }} >{author}</span>
                <span style={{ width:COLUMNS.comments.width }} >{num_comments}</span>
                <span style={{ width:COLUMNS.points.width }} >{points}</span>
                <span style={{ width:COLUMNS.archive.width }}></span>
                <ButtonInline onClick={() => props.onArchive(objectID)}>
                    Archive
                </ButtonInline>
                
                
            </div>
    )

};


  
export default Story;
