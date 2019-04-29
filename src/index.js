import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/index'; 
import { getReadableStories } from './selectors/story'
import { doArchiveStory } from './actions/archive'

const render = () => {
ReactDOM.render(<App stories={getReadableStories(store.getState())} onArchive={(objectID)=>{ 
  
    store.dispatch(doArchiveStory(objectID))}
}/>, document.getElementById('root'));
}
store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
