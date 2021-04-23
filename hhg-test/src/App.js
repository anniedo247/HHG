import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Feature1 from "./pages/Feature1";
import Feature2 from "./pages/Feature2";

function App() {
  return (
    <div className="text-center">
       <Router>
        <Switch>
          <Route exact path="/" component={Feature1} />
          <Route path="/employees" component={Feature2}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;