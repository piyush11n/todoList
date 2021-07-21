import React from "react";
import { Route } from "react-router-dom";
import {HomeContainer} from "./containers/export"
import "./App.css";

function App() {

  return (
    <div>
      <Route path="/" component={HomeContainer} />
    </div>
  );
}

export default App;
