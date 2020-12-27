import React, { useState } from "react";
// app components
import Navbar from "./Navbar";
// react router
import { BrowserRouter as Router, Switch } from "react-router-dom";
// material-ui components
import { Container, CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <Container fixed>
      <CssBaseline />
      <Router>{/* <Navbar /> */}</Router>
    </Container>
  );
};

export default App;
