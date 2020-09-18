import React from 'react';
// import axios from'../axios';
import Heart from'../Heart';
import WordLinks from './WordLinks';



const WordCard = ({id, word, definition, liked, links}) =>  { 
    return(
        <>
        <div className='word-card'>
        <h2 className='word-heading'>{ word }</h2>
        
        
            <p className= "intro"> {definition} </p>

            <WordLinks links={links} />

            <Heart id={ id } liked={ liked } />
            
        </div>
        </>
    )
}

export default WordCard;
