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

      <Router history={history}>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/error" exact component={ErrorPage} />
        </div>
      </Router>
    </>
  );
}

export default App;
