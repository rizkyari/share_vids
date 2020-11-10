import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {  Route, Switch, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./redux/reducer/index";
import rootSaga from "./redux/saga";
import App from "./App";
import Home from "./page/home";
import Register from "./page/register";
import Login from "./page/login";
import history from "./component/history";
import "font-awesome/css/font-awesome.min.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept(App);
}
