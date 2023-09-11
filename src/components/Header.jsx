import React from "react";
import './App.css';
import { NavLink} from 'react-router-dom';


const Header =() =>{
    return (
        <>
            <header>
                <div className="">
                <nav className="menu_style">
                    <li>
                        <NavLink className="linkstyle" to="/" >Home</NavLink> 
                    </li>
                    <li><NavLink  className="linkstyle" to="/about">about</NavLink>  </li>
                    <li><NavLink className="linkstyle" to="/contact">COntact</NavLink>  </li>
                    <li><NavLink className="linkstyle" to="/addnotes" >Add Notes</NavLink>  </li>
                    <li><NavLink className="linkstyle" to="/search" >Search</NavLink>  </li>

                    <li><NavLink className="linkstyle" to="/user/akhilesh/T" >USer</NavLink>  </li>
                </nav>
                </div>
            </header>
        </>
    )
}
export default Header;
