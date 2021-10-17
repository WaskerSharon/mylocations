import './App.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from 'react';
import { UserList } from './components/features/users/UserList';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/">
            <UserList />
          </Route>
          
          <Route path="/add-user">
            <h2>Add User</h2>
          </Route>

          <Route path="/edit-user">
            <h2>Edit User</h2>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}