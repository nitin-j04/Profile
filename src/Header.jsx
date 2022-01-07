import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.css";

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Header = () =>{


    
    const hamburger = document.getElementsByClassName("hamburger")[0];
    const navMenu = document.getElementsByClassName("nav_menu")[0];
    const navLink = document.getElementsByClassName("nav_link");

    Array.from(navLink).forEach((n) => {n.addEventListener("click", closeMenu)});

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }


    function mobileMenu() {
        const hamburger = document.getElementsByClassName("hamburger")[0];
        const navMenu = document.getElementsByClassName("nav_menu")[0];
       hamburger.classList.toggle("active");
       navMenu.classList.toggle("active");
    }



    return (
        <>

            <div className="header">
                <div className="navbar">
                    <NavLink  to="/" className="nav_logo">Home</NavLink>
                    <ul className="nav_menu">
                        <li className="nav_item">
                            <NavLink exact activeclassname="active" to="/" className="nav_link">About</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeclassname="active" to="/contact" className="nav_link">Contact</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink activeclassname="active" to="/projects" className="nav_link">Projects</NavLink>
                        </li>
                        {/* <li className="nav_item">
                            <NavLink to="/" className="nav_link">Contact</NavLink>
                        </li> */}
                    </ul>
                    <div className="hamburger" onClick={()=> {mobileMenu()}}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>

            <Routes>

                <Route exact path='/' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />

                {/* <Route exact path='/*' element={<Error />} /> */}
             
            </Routes>



        </>
    );
};

export default Header;