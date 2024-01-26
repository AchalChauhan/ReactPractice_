import React from "react";
import '../Styles/App.css'
function Header(){
    return(
        <>
            <header>
                <nav className="nav">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt=" react logo " width="40px" height="40px" className="header-logo" />
                <ul className="NavBar-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;