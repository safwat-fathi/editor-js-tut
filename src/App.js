import React from "react";
// app components
import Main from "./Main";
import Home from "./Home";
import Editor from "./Editor";
// app utils
import data from "./EditorFakeData";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// material-ui components
import { Container, CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Container fixed>
      <CssBaseline />
      <Router>
        <Switch>
          <Main>
            <Route exact path="/" component={Home} />
            <Route path="/my_document">
              <Editor data={data("My Document")} />
            </Route>
            <Route path="/untitled">
              <Editor data={data("Untitled")} />
            </Route>
          </Main>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
