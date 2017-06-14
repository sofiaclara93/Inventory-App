import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(

  (
    <Router>
      <div>
       <Route exact path="/" component={App}/>
       <Route path="/:itemId" component={App}/>
     </div>
    </Router>
  ),
  document.getElementById('root')
);
