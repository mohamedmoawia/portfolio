import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

import PomodroClock from '../images/pomodro-clock.jpg';
import Shortly from '../images/Shortly.jpg';
import QuoteMachine from '../images/quote-machine.jpg';
import omnifood from '../images/omnifood.jpg';
import Natours from '../images/Natours.jpg';
import dragAndDrop from '../images/Drag-Drop.jpg';
import mazeGame from '../images/maze-game.jpg';
import movieFight from '../images/movie-fight.jpg';


import '../style/projects.css';
import '../style/common.css';


const Projects = () => {
    return (
        <div>
            <div className='bg-image' style={{ minHeight: '100vh' }}>

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

                    {/* <div id='more-button' title="More">
                        <a href="https://codepen.io/mohamedmoawya/" target='blank'>
                            <div>
                                <i className="fas fa-chevron-circle-right bg-alert"></i>
                            </div>
                        </a>
                    </div> */}

                    <div className='my-row'>
                        <ProjectCard projectName='omnifood' projectImage={omnifood} codeLink='https://github.com/mohamedmoawia/omnifood' projectLink='https://mohamedmoawia.github.io/omnifood/' />

                        <ProjectCard projectName='Natours' projectImage={Natours} codeLink='https://github.com/mohamedmoawia/Natours' projectLink='https://mohamedmoawia.github.io/Natours/' />
                        <ProjectCard projectName='Drag-&-Drop' projectImage={dragAndDrop} codeLink='https://github.com/mohamedmoawia/Drag-Drop' projectLink='https://mohamedmoawia.github.io/Drag-Drop/' />

                    </div>
                    <div className='my-row'>
                        <ProjectCard projectName='maze-game' projectImage={mazeGame} codeLink='https://github.com/mohamedmoawia/maze-game' projectLink='https://mohamedmoawia.github.io/maze-game/' />

                        <ProjectCard projectName='movie-fight' projectImage={movieFight} codeLink='https://github.com/mohamedmoawia/movie-fight' projectLink='https://mohamedmoawia.github.io/movie-fight/' />
                        {/* <ProjectCard projectName='Drag-&-Drop' projectImage={dragAndDrop} codeLink='https://github.com/mohamedmoawia/Drag-Drop' projectLink='https://mohamedmoawia.github.io/Drag-Drop/' /> */}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects