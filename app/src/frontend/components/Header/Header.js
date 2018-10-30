import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav>
                <ul className="main-navigation">
                    <Link to="/">Home</Link>
                </ul>
                <ul>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
        </nav>       
    </header>
);

export default Header;