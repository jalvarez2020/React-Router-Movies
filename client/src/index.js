import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import ReactDOM from './../node_modules/react-dom';
import App from './App';


ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));