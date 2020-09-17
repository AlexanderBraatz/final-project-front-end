import React  from 'react';


const Link = ({  links }) => (
    
    <span >
        {links.map(link => (
            <a key={ link.id } >{ link }</a>
        ))}
    </span>
);

        
export default Link;