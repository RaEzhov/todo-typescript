import React from "react";
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper px1 purple darken-2">
            <a href="/todo-typescript" className="logo">React + TS</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/todo-typescript">Список дел</NavLink></li>
                <li><NavLink to="/todo-typescript/about">О нас</NavLink></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
