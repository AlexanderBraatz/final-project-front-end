import React,  { Component } from 'react';


class Search extends Component{

  render(){
    if (window.location.pathname === '/') return null;
    
    return(
    <form action="/action_page.php">
      <input className="form-input" type="text" placeholder="Search.." name="search"/>
      <button className="form-button" type="submit"><i className="fa fa-search"></i></button>
    </form>

    );
   

  }

}



export default Search