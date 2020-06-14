import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


const Home = () => {
    return (
        <div id="home" className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-between">
                <h1>Hey, I am Mohamed</h1>

                <div>
                    <img
                        src="https://raw.githubusercontent.com/shannonmoeller/front-end-logo/master/exports/front-end-logo-bw.png"
                        alt="Front end logo shows letter F with letter E in some style."
                    />

                </div>
            </div>
            <div id="content" className="d-flex justify-content-around">
                <Link className="link" to="/About">About</Link>
                <Link className="link" to="/Projects" >Projects</Link>
                <Link className="link" id="contact" to="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default Home