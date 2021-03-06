import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router  } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    
      <div>
                  <Route path="/" exact component={ Login} /> 
                  <Route path="/dashboard"  component={ Dashboard} />  
      </div>  
      
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
