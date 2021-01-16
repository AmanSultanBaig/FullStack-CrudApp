import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch, Route } from 'react-router-dom'
import UserList from './components/user-list.component'
import User from './components/user.component'
import AddUser from './components/add-user.component'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/user-list" className="navbar-brand">
          FullStack-CrudApp
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/user-list"} className="nav-link">
                Users List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add User
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/user-list"]} component={UserList} />
            <Route exact path="/add" component={AddUser} />
            <Route path="/user/:id" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;