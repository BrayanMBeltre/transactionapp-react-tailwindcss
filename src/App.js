import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Download from "./views/Download";
import Home from "./views/Home";
import NewTransaction from "./views/NewTransaction";
import NotFound from "./views/NotFound";
import Upload from "./views/Upload";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/new">
          <NewTransaction />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
