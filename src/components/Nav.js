import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{

    render(){

    return(
    <>
   
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/liked'>Liked</Link>

    </>
   
    );
    };

} 

export default Nav;
