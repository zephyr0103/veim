import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import {mainRoute} from "./routes"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={App}/> //admin主页面的路由  进入到App组件
      {
        mainRoute.map(route=>{
          return <Route path={route.pathname} component={route.component}/>
        })
      }  //遍历login 404 的路由
      <Redirect to="/admin" from="/" exact/>  //重定向  首页为admin
      <Redirect to="/404" />		//如果路径与之前都不匹配,则返回404页面
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
