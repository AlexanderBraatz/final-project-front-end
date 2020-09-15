import React, { Component } from 'react';
import Nav from "./Nav";

 class Header extends Component {
    
            render() {
                  const { children } =this.props;
      
                  if (window.location.pathname === '/') return null;
                 
              return (
              <>
                 <header className="header glitch">
                    
                    {/* <h1 className="header-title" data-text={children}>{children}</h1> */}
                    <div className="header-title " >
                        {children}</div>

                    <Nav />
                
                </header>
              </>
              );
      };
          
      
      
          }


export default Header