import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PersonList from './PersonList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PersonList />, document.getElementById('root'));
registerServiceWorker();
