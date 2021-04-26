import React, { useState } from 'react';
import StoreContextProvider from '../contexts/StoreContext.js';
import "./App.css";
import css from "./App.module.css";
import About from "./About.js";
import Home from "./Home.js";
import Content from "./Content.js";
import Header from './Header.js';
import FullPage from './FullPage.js';
import "bootstrap/dist/css/bootstrap.min.css";


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
        <Header/>
        <Switch>
          <Route path="/content/:filter?">
              <Content />
          </Route>
          <Route path="/FullPage/:contentId">
              <FullPage />
          </Route>
          <Route path="/home">
              <Home />
          </Route>
          <Route path="/">
              <About />
          </Route>
        </Switch>
      </main>
    </div>
    </StoreContextProvider>
    </Router>
  );

}



export default App;