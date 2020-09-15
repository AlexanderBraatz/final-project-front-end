import React  from 'react';


const Words = ({ words }) => (
    words ? ( 
        <ul className="list">
            {words.map((value, index) => (
              
                <div className="card list-items " key={ index }>
                    <a className="list-items-nav"  href="/words">{ value }</a>
                    <div className="card-container">
                        <i className="heart fa fa-heart-o "></i>
                    </div>
                </div>
                
               
             
            ))}
        </ul> ) : <p> 'No words to display! </p>
    );






export default Words