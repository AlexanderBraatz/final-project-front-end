import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Words from "./components/Words";
import Footer from "./components/Footer";



import './App.css';

function App() {
  return (
  
    <Router>
      <Header > ARO </Header>

      <Switch>
        <Route exact path = "/">
          <Intro />
          <Words words={ ["Attribute", "Boolean", " Child", "DOM", "Element", "Favicon", "GIF", "HTML", "Inheritance", "JPEG", "LAMP", "Markup", "Nesting", "Parent", "Script", "Text Editor"] }/>
        </Route>
        
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
