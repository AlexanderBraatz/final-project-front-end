import React, { Component} from 'react';
import Search from "./Search";
import {Link} from 'react-router-dom';

class Nav extends Component{

    render(){
        if (window.location.pathname === '/') return null;
    return(
    <>
    <div className ="nav-bar">
        <Link className='nav-link' to='/words'>Home</Link>
        <Link className='nav-link' to='/liked'>Liked</Link>
        <Link className='nav-link' to='/form'>Log In</Link>
        <Search /> 
    </div>
    </>
   
    );
    };

} 

export default Nav;
