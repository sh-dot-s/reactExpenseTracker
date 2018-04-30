import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import Base from '../components/Base';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Help from '../components/Help';
import PageNotFound from '../components/NotFound';

const Header = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">Expensify</a>
      </div>
      <ul className="nav nav-pills">
        <li><NavLink to="/" activeClassName='active' exact={true}>Home</NavLink></li>
        <li><NavLink to="/create" activeClassName='active' exact={true}>Create</NavLink></li>
        <li><NavLink to="/help" activeClassName='active' exact={true}>Help</NavLink></li>
      </ul>
    </div>
  </nav>
);

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Base} exact={true}/>
        <Route path="/create" component={Create}/>
        <Route path="/edit^:key" component={Edit} strict={true}/>
        <Route path="/help" component={Help}/>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
