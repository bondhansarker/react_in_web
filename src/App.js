import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageWrapper from './components/PageWrapper';

//pages
import Home from './components/pages/Home';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <Router>
      <PageWrapper>

        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          path="/about"
          component={About}
        />


        <Route
          path="/contact"
          component={Contact}
        />
      </PageWrapper>
    </Router>

  );
}

export default App;
