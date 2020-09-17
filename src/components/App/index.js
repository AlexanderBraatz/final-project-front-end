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

// import Form from "../../components/Form";

import '../../App.css';


const App = (props) => (
    <React.Fragment>
      <Router  history={ history }>
      <Header > NERD WORDS </Header>
        {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
             <Home />
            </Route>

            {/* <Route exact path="/form">
             <Form />
            </Route> */}

            <Route exact path="/words/:id"
              render={ ( { match }) => (
                <LoadingWC 
                  id = { match.params.id }>
                  <WordCard />
                </LoadingWC>
              )}> 
            </Route>


            <Route exact path="/words">
              <LoadingWL >
                <Intro />
                <WordList />
              </LoadingWL>
            </Route>
            


            <Route path="/liked">
              <LoadingLWL >
                <LikedWordList />
              </LoadingLWL>
            </Route>

            <FourOhFour />
          </Switch>
          <Footer />
      </Router>
    </React.Fragment>
);

export default App;


