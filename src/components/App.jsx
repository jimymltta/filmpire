import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import useStyles from "./styles";

// Components imports
import { Actors, MovieInformations, Movies, Navbar, Profile } from './'

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
    <Navbar />
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Switch>
        <Route exact path="/movie/:id">
          <MovieInformations />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
  )
};

export default App;
