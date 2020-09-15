import React, { Component } from 'react';


class Home extends Component {
    render() {
        const { children } =this.props;
        

        return (
        <>
        <div className="body">
            <a href="./words">
            <div className="glitch" data-text="NERD WORDS"></div></a>
            <div className="glow">NERD WORDS</div>
            
            
            
            
        </div>   
        </>

            
            

        );



    }

    

}

export default Home