import React from 'react'; 
import './Stories.css'
import  Story from './Story';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive' ;
import { getReadableStories } from '../selectors/story'; 


const COLUMNS = {
    title: {
      label: 'Title',
      width: '40%',
    },
    author: {
      label: 'Author',
      width: '30%',
    },
    comments: {
      label: 'Comments',
      width: '10%',
    },
    points: {
      label: 'Points',
      width: '10%',
    },
    archive: {
      width: '10%',
    },
  };
  
export const Stories = (props) => {

    const historias = (props.stories || []);
    
    return (
        <div className="stories">
          <StoriesHeader columns={COLUMNS} />
          {   historias.map( el => {
             return <Story key={el.objectID} story={el} columns={COLUMNS} onArchive={props.onArchive} />
          })

     }
     
     </div>
    ) ;
}

const StoriesHeader = ({columns}) => (

<div className="stories-header">
{
  Object.keys(columns).map(key =>
      <span
        key={key}
        style={{ width: columns[key].width }}
      >
        {columns[key].label}
      </span>
    )}
</div>
);

 const mapStateToProps = (state) => {

    return  {stories: getReadableStories(state) }; 
 }

 const mapDispatchToProps = dispatch => ({
   onArchive: id => dispatch(doArchiveStory(id))
 })


export default connect (mapStateToProps,mapDispatchToProps)(Stories) ;


