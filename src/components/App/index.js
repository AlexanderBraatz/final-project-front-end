import React from "react"; 
import {  Router, Route, Switch } from "react-router-dom";

import Navbar from "../Navbar";
import LikedWordList from "../LikedWordList";
// import SearchBar from "../SearchBar";
import WordCard from "../WordCard";
import WordList from "../WordList";
import LoadingWC from "../Loading/LoadingWC";
import LoadingWL from "../Loading/LoadingWL";
import LoadingLWL from "../Loading/LoadingLWL";

import history from "../../history";


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


const App = (props) => (
    <React.Fragment>
      <Router  history={ history }>
      <Header > NERD WORDS </Header>

        <Navbar />
          <Switch>
            <Route exact path="/words">
              <LoadingWL >
                <WordList />
                <WordCard />
              </LoadingWL>
              <Intro />
              
              {/* <Loading /> */}
              <WordsTest words={ ["Attribute", "Boolean", " Child", "DOM", "Element", "Favicon", "GIF", "HTML", "Inheritance", "JPEG", "LAMP", "Markup", "Nesting", "Parent", "Script", "Text Editor"] }/>
              {/* <Words /> */}


            </Route>
            
            <Route 
              exact path="/words/:id"
              render={ ( { match }) => (
                <LoadingWC 
                  id = { match.params.id }>
                  <WordCard />

                
                {/* <Route exact path="/words/:id" render={ ({match}) => (
                <Word id={ match.params.id }/>
              )} /> */}
                </LoadingWC>
              )}> 
            </Route>

            <Route path="/liked">
              <LoadingLWL >
                <LikedWordList />
              </LoadingLWL>
            </Route>
              {/* <FourOhFour /> */}
            {/* <FourOhFour/> */}
          </Switch>
          <Footer />
          {/* <Footer /> */}
      </Router>
    </React.Fragment>
);

export default App;