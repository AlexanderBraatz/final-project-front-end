import React, { Component } from 'react';


class Home extends Component {
    render() {
        const { children } =this.props;
        

        return (
        <>
        <body className="body">
            <h1 className="home-header"><a className="home-link" href="/words">{children}</a></h1>
        </body>   
        </>

            
            

        );



    }

    

}

export default Home