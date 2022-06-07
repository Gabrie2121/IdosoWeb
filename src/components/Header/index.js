import React from "react";
import { Link } from "react-router-dom";
//  import logoIdoso from ".../assets/logo.png"


function Header() {
    return (
        <header>
            <nav>
                <Link className="logo" to="/" />
                {/* <img src={logoIdoso} /> */}
                <ul className="nav_list">
                    <li>QUEM SOMOS</li>
                    <li>CONTATO</li>
                    <li>LOGIN</li>
                    <li>CADASTRO</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;