import React from 'react';
import Heart from'../Heart';


const WordCard = (id, word, definition, liked, links) =>  { 
    return(
        <>
        <h1>{ word }</h1>
        <article>
            <h2>{definition}</h2>
            {/* map over the links array prop */}
            {/* <Heart id={ id } liked={ liked } */}
            
        </article>
        </>
    )
}

export default WordCard;
