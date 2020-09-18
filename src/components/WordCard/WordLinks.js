import React  from 'react';


const WordLinks = ({ links =[] }) => (
    
    <span >
        
        {links.map(link => (
            <>
            <a 
            className="list-items-nav"
            key={ link.id } 
            href={ link.link }>{ link.link }</a>
            </>
        ))}
    </span>
);

        
export default WordLinks;