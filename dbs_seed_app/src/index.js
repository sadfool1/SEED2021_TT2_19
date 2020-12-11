import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom";

import Register from './Register'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
replce the ReactDOM.render
import { BrowserRouter, Route } from "react-router-dom";
import on top
then if you wanna link from any other page just
<Link to="/register">
{"Don't have an account? Sign Up"}
</Link>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
