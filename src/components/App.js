import React from "react";
//react-router
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";

console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

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