import React from "react";
//react-router
import { Router, Route } from "react-router-dom";

import Header from "./widgets/Header";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

import history from "../history";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/error" exact component={ErrorPage} />
        </Router>
      </div>
    </>
  );
}

export default App;
