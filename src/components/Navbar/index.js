import React from "react";
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return(
        <Nav>
            <Nav.Item>
                <Nav.Link href="/words">Words</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/liked">Liked</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;