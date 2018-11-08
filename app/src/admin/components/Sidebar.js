import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => (
    <aside>
        <nav>
            <ul>
                <li>
                    <div>
                        <NavLink activeClassName="active" className="navigation-link" to="/admin/pages">
                            <i className="fa fa-file"></i>
                            Pages
                        </NavLink>
                        <Link className="add-new-link" to="/admin/pages/new">
                            New
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    </aside>
);

export default Sidebar;