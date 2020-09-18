import React from "react"; 
import { HashRouter as Router, Route, Switch } from "react-router-dom";


import LikedWordList from "../LikedWordList";
// import SearchBar from "../SearchBar";
import WordCard from "../WordCard";
import WordList from "../WordList";
import LoadingWC from "../Loading/LoadingWC";
import LoadingWL from "../Loading/LoadingWL";
import LoadingLWL from "../Loading/LoadingLWL";

import history from "../../history";


import Header from "../../components/Header/Header";
import Home from "../../components/Home";

import Intro from "../../components/Intro";
import FourOhFour from "../../components/FourOhFour";
import Footer from "../../components/Footer";

import Form from "../../components/Form";

import '../../App.css';


const App = (props) => (
    <React.Fragment>
      <Router  history={ history }>
      {/* <Header > NERD WORDS </Header> */}
        {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
             <Home />
            </Route>

            <Route exact path="/form">
              <Header> NERD WORDS </Header>
             <Form />
            </Route>

            <Route exact path="/words/:id"
              render={ ( { match }) => (
                <LoadingWC 
                  id = { match.params.id }>
                    <Header > NERD WORDS </Header>
                  <WordCard />
                  <Footer />
                </LoadingWC>
              )}> 
            </Route>


            <Route exact path="/words">
              <LoadingWL >
              <Header > NERD WORDS </Header>
                <Intro />
                <WordList />
                <Footer />
              </LoadingWL>
            </Route>
            


            <Route path="/liked">
              <LoadingLWL >
              <Header > NERD WORDS </Header>
                <LikedWordList />
                <Footer />
              </LoadingLWL>
            </Route>

            <FourOhFour />
          </Switch>
          {/* <Footer /> */}
      </Router>
    </React.Fragment>
);

export default App;


