import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import App from './App';

render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
