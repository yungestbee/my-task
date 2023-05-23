import Login from './login'
import './App.css'
import './Login.css'
import Application from './Application'
import TodoList from './TodoList'
import React from 'react';
import ReactDOM from 'react-dom'
// import { Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className='app-container'>
          <nav>
            <h1>Yungest Logical Apps</h1>
            <ul className='unorder'>
              <li>
                <Link className="links" to="/Login.js" target="_blank">Log in</Link>
              </li>
              <li>
                <Link className="links" to="/Application.js" target="_blank">Coordinate Converter</Link>
              </li>
              <li>
                <Link className="links" to="/TodoList.js" target="_blank">To-do List</Link>
              </li>
            </ul>
          </nav>
  
          <Switch>

            <Route path="/login.js" exact>
              <Login />
            </Route>

            <Route path="/Application.js" exact>
              <Application/>
            </Route>

            <Route path="/TodoList.js" >
              <TodoList />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  };
   
export default App;
