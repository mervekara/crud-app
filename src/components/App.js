import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./elements/Header";
import Home from "./Home";
import Detail from "./Detail";
import Profile from "./Profile";
import Footer from "./elements/Footer";
import NotFound from "./NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";
import { StyledApp } from "./styles/StyledApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <StyledApp>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={Detail} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route default component={NotFound} />
          </Switch>
          <Footer />
          <GlobalStyle />
        </StyledApp>
      </BrowserRouter>
    </>
  );
}

export default App;
