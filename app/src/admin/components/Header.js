import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <section className="logo">
            Reactive CMS
        </section>
        <nav>
            <ul>
                <li>
                    <Link to="/">Open website</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;