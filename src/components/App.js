import React, { useState } from 'react';
import StoreContextProvider from '/Users/seanc/csci3366/enviornmental-racism/src/contexts/StoreContext.js';
import "./App.css";
import css from "./App.module.css";
import About from "./About.js";
import Home from "./Home.js";
import Articles from "./Articles.js";
import Article from "./Article";
import Books from "./Books.js";
import MostPopular from "./MostPopular.js";
import Videos from "./Videos.js";
import Organizations from "./Organizations.js";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [page, setPage] = useState('home');
  

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
    <div className={css.container}>
      <main className={css.content}>
        {renderMain()}
      </main>
    </div>
    </StoreContextProvider>
    </Router>
  );


  function renderMain() {
    return (
      <Switch>
        <Route path="/article/:articleId?">
            <Article />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/books">
            <Books />
        </Route>
        <Route path="/articles">
            <Articles />
        </Route>
        <Route path="/videos">
            <Videos />
        </Route>
        <Route path="/mostpopular">
            <MostPopular />
        </Route>
        <Route path="/organizations">
            <Organizations />
        </Route>
        <Route path="/about">
            <About />
        </Route>
      </Switch>

    );

  }


}



export default App;