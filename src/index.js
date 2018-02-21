import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

import App from './view/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
