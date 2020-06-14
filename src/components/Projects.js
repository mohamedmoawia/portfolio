import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

import PomodroClock from '../images/pomodro-clock.jpeg';
import Shortly from '../images/Shortly.jpeg';
import QuoteMachine from '../images/quote-machine.jpeg';
import Calculator from '../images/calculator.jpeg';
import DrumPad from '../images/drum-pad.jpeg';
import ViedoSearch from '../images/video-search.PNG';


import './projects.css';



const Projects = () => {
    return (
        <div>
            <div className='bg-image'>

                <div id='projects'>
                    <div className="pointers-container d-flex justify-content-between container-fluid">

                        <div className='d-flex'>

                            <div className='move-left pointer'>
                                <Link className='text-decoration-none' to="/">
                                    <i className="fas fa-chevron-left"></i>Home
                            </Link>
                            </div>
                            <div className='move-left pointer'>
                                <Link className='text-decoration-none' to="/About" >
                                    <i className="fas fa-chevron-left"></i>About
                            </Link>
                            </div>

                        </div>

                        <div className='move-right pointer'>
                            <Link className='text-decoration-none' to="/Contact">
                                Contact <i className="fas fa-chevron-right"></i>
                            </Link>
                        </div>

                    </div>

                    <div className='my-row'>

                        <ProjectCard projectName='Shortly' projectImage={Shortly} codeLink='https://github.com/mohamedmoawia/Shortly/tree/master' projectLink='https://mohamedmoawia.github.io/Shortly/' />

                        <ProjectCard projectName='Pomodro-clock' projectImage={PomodroClock} codeLink='https://github.com/mohamedmoawia/pomodro-clock/tree/master' projectLink='https://mohamedmoawia.github.io/pomodro-clock/' />
                        <ProjectCard projectName='Quote-machine' projectImage={QuoteMachine} codeLink='https://github.com/mohamedmoawia/quotes/tree/master' projectLink='https://mohamedmoawia.github.io/quotes/' />

                    </div>

                    <div id='more-button' title="More">
                        <a href="https://codepen.io/mohamedmoawya/" target='blank'>
                            <div>
                                <i className="fas fa-chevron-circle-right bg-alert"></i>
                            </div>
                        </a>
                    </div>

                    <div className='my-row'>
                        <ProjectCard projectName='Calculator' projectImage={Calculator} codeLink='https://github.com/mohamedmoawia/calculator/tree/master' projectLink='https://mohamedmoawia.github.io/calculator/' />

                        <ProjectCard projectName='Drum-pad' projectImage={DrumPad} codeLink='https://github.com/mohamedmoawia/drum-machine/tree/master' projectLink='https://mohamedmoawia.github.io/drum-machine/' />
                        <ProjectCard projectName='Video-search' projectImage={ViedoSearch} codeLink='https://github.com/mohamedmoawia/videos' projectLink='https://mohamedmoawia.github.io/videos/' />

                    </div>
                    <div id='button-hide' title="More">
                        <a href="https://codepen.io/mohamedmoawya/" className='text-decoration-none' target='blank'>
                            <div>
                                More <i className="fas fa-chevron-circle-right bg-alert"></i>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects