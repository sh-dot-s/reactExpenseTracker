import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Base from '../components/Base';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Help from '../components/Help';
import PageNotFound from '../components/NotFound';

const Header = () => (
  <div>
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName='active' exact={true}>Home</NavLink>&nbsp;
      <NavLink to="/create" activeClassName='active' exact={true}>Create</NavLink>&nbsp;
      <NavLink to="/help" activeClassName='active' exact={true}>Help</NavLink>&nbsp;
    </header>
  </div>
);

const Routes = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Base} exact={true} />
        <Route path="/create" component={Create} />
        <Route path="/edit^:key" component={Edit} strict={true}/>
        <Route path="/help" component={Help} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
