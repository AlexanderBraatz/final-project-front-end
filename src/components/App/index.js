import React from "react"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../Navbar";
import LikedWordList from "../LikedWordList";
// import SearchBar from "../SearchBar";
import WordCard from "../WordCard";
import WordList from "../WordList";
import Loading from "../Loading";


const App = (props) => (
    <React.Fragment>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/words">
              <Loading>
                <WordList />
                <WordCard />
              </Loading>
            </Route>
            
            {/* <Route 
              exact path="/words/:id"
              render={ ( { match }) => (<WordCard id = { match.params.id }/>)}> 
            </Route> */}

            <Route path="/liked">
              <Loading>
                <LikedWordList />
              </Loading>
            </Route>

            {/* <FourOhFour/> */}
          </Switch>
          {/* <Footer /> */}
      </Router>
    </React.Fragment>
);

export default App;