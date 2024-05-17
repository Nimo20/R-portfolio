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
        label: 'CONTACT',
        to: "/contact"
    },
    {
        label: 'PROJECT',
        to: "/project"
    },
    {
        label: 'PORTFOLIO',
        to: "/portfolio"
    }
];

const Navigation = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className="navbar">
                <Link to={'/'} className="logo">
                    <FaReact size={30} />
                </Link>
                <ul className="nav-links">
                    {data.map(item => (
                        <li key={item.to}>
                            <Link to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="navicon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navigation;








