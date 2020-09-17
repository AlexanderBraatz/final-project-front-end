import React from 'react';

// import Heart from "./Heart";


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

              {/* <Loading /> */}
              {/* <WordsTest words={ ["Attribute", "Boolean", " Child", "DOM", "Element", "Favicon", "GIF", "HTML", "Inheritance", "JPEG", "LAMP", "Markup", "Nesting", "Parent", "Script", "Text Editor"] }/> */}
              {/* <Words /> */}

export default Words