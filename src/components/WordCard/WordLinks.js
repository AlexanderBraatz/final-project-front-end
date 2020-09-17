import React  from 'react';


const WordLinks = ({  links }) => (
    
    <span >
        {links.map(link => (
            <a href="/" key={ link.id } >{ link }</a>
        ))}
    </span>
);

        
export default WordLinks;