import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        const { children } =this.props;
        

        return (
        <>
        <div className="body">
            <Link to="/words">
            <div className="glitch " data-text="NERD WORDS"></div></Link>
            <div className="glow">{children}</div>
                <p className="subtitle">Click to enter</p>
        
    
        </div>   
        </>

            
            

        );



    }

    

}

export default Home