import React from 'react';
import Stories from './Stories'; 
import './App.css'

export const App = (props) => (

    <div className="app">
        <Stories stories={props.stories} onArchive={props.onArchive} />
    
    </div>
);

export default App; 
