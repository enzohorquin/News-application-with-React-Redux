import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/index'; 
import  { STORY_ARCHIVE } from './constants/actionTypes'

ReactDOM.render(<App stories={store.getState().storyState} onArchive={(objectID)=>{ 
    console.log(objectID);
    store.dispatch({type:STORY_ARCHIVE,objectID})}
}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
