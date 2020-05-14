import React from "react";
//react-router
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
