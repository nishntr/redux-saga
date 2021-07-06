import React, { useState, useEffect } from 'react'

import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';


const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function Header() {
    const [theme, setTheme] = useState(getStorageTheme);

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <Navbar sticky="top" className="nav-style">
            <Navbar.Brand href="/">
                APIFetch </Navbar.Brand>
            <Nav className="justify-content-end" style={{ width: "100%", paddingRight: 19 }}>
                <Button className="btn" onClick={toggleTheme}>
                    Dark Mode
                </Button>

            </Nav>


        </Navbar>

    )
}


export default Header;