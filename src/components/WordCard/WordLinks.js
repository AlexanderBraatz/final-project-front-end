import React  from 'react';


const WordLinks = ({  links }) => (
    
    <span >
        {links.map(link => (
            <a key={ link.id } >{ link }</a>
        ))}
    </span>
);

        
export default WordLinks;