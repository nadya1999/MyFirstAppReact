import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../components/App.jsx';

render (<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));