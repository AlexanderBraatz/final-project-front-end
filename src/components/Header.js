import React, { Component } from 'react';
import Nav from "./Nav";

 class Header extends Component {
    
            render() {
                  const { children } =this.props;
      
                  if (window.location.pathname === '/') return null;
                 
              return (
              <>
                 <header className="header">
                    
                    <h1 className="header-title">{children}</h1>

                    <Nav />
                
                </header>
              </>
              );
      };
          
      
      
          }


export default Header