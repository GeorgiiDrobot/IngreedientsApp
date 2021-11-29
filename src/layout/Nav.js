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
                <select>
                    <option value='ru'>Ru</option>
                    <option value='en'>En</option>
                </select>
            </ul>
            
    </nav>
)
export default Nav;