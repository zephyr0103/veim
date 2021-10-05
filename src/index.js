import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import {mainRoute} from "./routes"
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={App}/>
      {
        mainRoute.map(route=>{
          return <Route path={route.pathname} component={route.component}/>
         })
      } 
      <Redirect to="/admin" from="/" exact/> 
      <Redirect to="/404" />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);
