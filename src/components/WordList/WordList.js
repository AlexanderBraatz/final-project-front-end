import React from 'react';
import { Link } from "react-router-dom";
import Heart from "../Heart";


  

const WordList = ({ wordList }) => {
    return(
        <ul className="list">
            { wordList.map( term => (
                
                <div className="card list-items " key={ term.id }  >
                    <Link 
                    to={ `/words/${ term.id }` } className="list-items-nav">
                        { term.word}
                    </Link>
                    <Heart id={ term.id } liked={ term.liked } />
                </div>
            ))};   
            
        </ul> 
    )

}
  


export default WordList;

