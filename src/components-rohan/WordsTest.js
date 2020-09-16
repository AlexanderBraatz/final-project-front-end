import React from 'react';

import Heart from "./Heart";


const Words = ({ words }) => (
    words ? ( 
        <ul className="list">
            {words.map((value, index) => (
              
                <div className="card list-items " key={ index }>
                    <a   className="list-items-nav"  href="/words">{ value }</a>
                    <Heart />
                </div>
                
            ))}
        </ul> ) : <p> 'No words to display! </p>
);


export default Words