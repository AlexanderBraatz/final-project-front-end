import React from 'react';
import axios from'../axios';
import Heart from'../Heart';
import WordLinks from './WordLinks';



const WordCard = (id, word, definition, liked, links) =>  { 
    return(
        <>
        <h2 className='word-heading'>{ word }</h2>
        
        <article>
            <p className= "intro"> {definition} </p>

            <WordLinks />

            <Heart id={ id } liked={ liked } />
            
        </article>
        </>
    )
}

export default WordCard;
