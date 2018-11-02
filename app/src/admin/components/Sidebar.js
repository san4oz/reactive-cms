import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
    <aside>
        <nav>
            <ul>
                <li>
                    <Link to="/admin/pages">Pages</Link>
                </li>                       
            </ul>
        </nav>
    </aside>
);

export default Sidebar;