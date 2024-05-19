import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact');
    };
    return (
        <header>
            <nav>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/about" exact activeClassName="active">About</NavLink>
                <NavLink to="/project" activeClassName="active">Project</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
            </nav>
        </header>,

        <section className="home">
            <div>
                <h1>
                    Hello, I'm Nimo
                    <br />
                    Full stack developer
                </h1>

                <div className='contButon'>
                    <button onClick={handleNavigateToContactMePage}>Hire me</button>
                </div>

            </div>


        </section>
    );
};

export default Home;