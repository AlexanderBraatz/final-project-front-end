import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "../Heart";



const Liked =( likedWordList ) => {

// like WordList but with deffinitions with Heart beeing used
  return(
        <>

        <h2 className="word-heading">Liked Words</h2>

        <ul className="list">
          { likedWordList.map( term => (
              <div className="card list-items " >
                  <Link 
                  to={ '/words/${ term.id }' } 
                  key={ term.id } 
                  className="list-items-nav"  
                  >
                      { term.word}
                  </Link>
      
                  <p className='intro'>{ term.description }</p>
      
                  <Heart id={ term.id } like={ term.liked} />
              </div> 
          ))}
        </ul>
    
        </>
      )
  }


export default Liked;