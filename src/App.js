import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components-rohan/Header";
import Home from "./components-rohan/Home";

import Intro from "./components-rohan/Intro";
// import FourOhFour from "./components/FourOhFour";
// import Loading from "./components/Loading";
import WordsTest from "./components-rohan/WordsTest";
// import Words from "./components/Words";
// import Word from "./components/Word";
import Footer from "./components-rohan/Footer";



import './App.css';


function App() {
  return (
  
  <Router>
    <Header > NERD WORDS </Header>
 

    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
     
      <Route exact path = "/words">
        <Intro />
        {/* <FourOhFour /> */}
        {/* <Loading /> */}
        <WordsTest words={ ["Attribute", "Boolean", " Child", "DOM", "Element", "Favicon", "GIF", "HTML", "Inheritance", "JPEG", "LAMP", "Markup", "Nesting", "Parent", "Script", "Text Editor"] }/>
        {/* <Words /> */}
      </Route>

      {/* <Route exact path="/words/:id" render={ ({match}) => (
        <Word id={ match.params.id }/>
      )} /> */}
        
    </Switch>

      <Footer />
  </Router>
  );
}

export default App;
