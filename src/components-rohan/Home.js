import React, { Component } from 'react';


class Home extends Component {
    render() {
        const { children } =this.props;
        

        return (
        <>
        <div className="body">
            <a href="./words">
            <div className="glitch " data-text="NERD WORDS"></div></a>
            <div className="glow">{children}</div>
                <p className="subtitle">Click to enter</p>
        
    
        </div>   
        </>

            
            

        );



    }

    

}

export default Home