import React from 'react';
import { Link } from "react-router-dom";
import LikedWordList from '../LikedWordList';
import Heart from "../Heart";


const WordList = ({wordList}) => {
   
<ul className="list">
    { wordList.map( term => (
        
        <div className="card list-items "  >
            <Link 
            to={ `/words/${ term.id }` } key={ term.id } className="list-items-nav"  href="/words">
                { term.word}
            </Link>
            <Heart id={ term.id } liked={ term.liked } />
        </div>
    ))};   
    
</ul> 

}
  


export default WordList;

