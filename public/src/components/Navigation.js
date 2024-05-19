import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from 'react-icons/hi'
import { Link } from "react-router-dom";

const data = [
    {
        label: 'HOME',
        to: "/"
    },
    {
        label: 'ABOUT',
        to: "/about"
    },
    {
        label: 'PROJECT',
        to: "/project"
    },
    {
        label: 'CONTACT',
        to: "/contact"
    },
    {
        label: 'RESUME',
        to: "/resume"
    }


];

const Navigation = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">
                <Link to={'/'} className="logo">
                    <FaReact size={30} />
                </Link>
                <ul className={`nav-links ${toggleIcon ? 'active' : ''}`}>
                    {data.map(item => (
                        <li key={item.to}>
                            <Link to={item.to} onClick={handleToggleIcon}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="navicon" onClick={handleToggleIcon} aria-label="Toggle navigation">
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navigation;







