import React from "react";
//react-router
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./widgets/Header";
import Landing from "./pages/Landing";

console.log(
  "Getting the environmetal variable from APP js",
  process.env.REACT_APP_YOUTUBE_API_KEY
);

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
