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

import history from "../history";

const App = (props) => (
    <React.Fragment>
      <Router  history={ history }>
        <Navbar />
          <Switch>
            <Route exact path="/words">
              <LoadingWL >
                <WordList />
                <WordCard />
              </LoadingWL>
            </Route>
            
            <Route 
              exact path="/words/:id"
              render={ ( { match }) => (
                <LoadingWC 
                  id = { match.params.id }>
                  <WordCard />
                </LoadingWC>
              )}> 
            </Route>

            <Route path="/liked">
              <LoadingLWL >
                <LikedWordList />
              </LoadingLWL>
            </Route>

            {/* <FourOhFour/> */}
          </Switch>
          {/* <Footer /> */}
      </Router>
    </React.Fragment>
);

export default App;