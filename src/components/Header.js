import React, { Component } from 'react';
import Nav from "./Nav"
import Search from "./Search"

class Header extends Component {
    render() {
        const { children } =this.props;


        return (
            <header >
                <nav class="navbar ">
                    
                        <div class="navbar-header">
                            <p >ARO</p>
                        </div>
                        <ul >
                            <Nav />
                        </ul>

                        <Search />
                   
                </nav>
            </header>

        );



    }

}

export default Header