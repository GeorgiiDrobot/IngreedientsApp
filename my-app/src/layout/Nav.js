import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const navs = [
{ //If you want to add a page you have to add it here
    path: "/",
    name: "Home",
},
{
    path: "/about",
    name: "About",
},
{
    path: "/contact",
    name: "Contact",
},
]

const navsRus = [
    { //If you want to add a page you have to add it here
        path: "/",
        name: "Домой",
    },
    {
        path: "/about",
        name: "О нас",
    },
    {
        path: "/contact",
        name: "Контакты",
    },
    ]

const Nav = () => (
    <nav>
        <ul className="navul">
            {navs.map((navItem) => (
                 <li><NavLink 
                        activeClassName='active'   
                        exact to={navItem.path}>    
                        {navItem.name}
                      </NavLink>   { /*instead of copying Navlinks */}
                </li>
            ))}
        </ul>
            
    </nav>
)
export default Nav;