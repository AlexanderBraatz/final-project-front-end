import React,  { useState } from 'react';


const Search = ({ find}) => {

  const [value, setValue ] = useState( "" );
  
  const handleChange = (e) => ( setValue(e.currentTarget.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    find(value);
  };


  
   
    
    return(
    <form className="search" onSubmit={handleSubmit} >
      <input onChange={handleChange} className="form-input" type="text" placeholder="Search.." name="search"/>
      <button className="form-button" type="submit"><i className="fa fa-search"></i></button>
    </form>

    );
   



}



export default Search