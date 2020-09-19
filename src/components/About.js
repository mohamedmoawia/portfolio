import React from 'react';
import { Link } from 'react-router-dom';
import '../style/common.css';
import '../style/About.css';

const About = () => {

    const ResumeLink = "https://drive.google.com/file/d/1k0AcqbWqQtUtglxrI6fCmKbEHffz_pkE/view?usp=sharing";
    const facebookLink = "https://www.facebook.com/M.ma3wya";
    const GithubLink = "https://github.com/mohamedmoawia";
    const LinkedinLink = "https://www.linkedin.com/in/mohamedmoawia";
    const CodepenLink = "https://codepen.io/mohamedmoawya";
    const FreeCodeCampLink = "https://www.freecodecamp.org/mohamed-moawya";

    return (
        <div className='page-container'>
            <div className='bg-image'>
                <div id="about" className="d-flex align-items-center flex-column ">

                    <div className="pointers-container  d-flex justify-content-between container-fluid">
                        <div className='pointer move-left'>
                            <Link className='text-decoration-none' to="/">
                                <i className="fas fa-chevron-left"></i>Home
                        </Link>
                        </div>
                        <div className='d-flex'>
                            <div className='move-right pointer'>
                                <Link className='text-decoration-none' to="/Projects" >
                                    Projects<i className="fas fa-chevron-right"></i>
                                </Link>
                            </div>
                            <div className='move-right pointer'>
                                <Link className='text-decoration-none' to="/Contact">
                                    Contact<i className="fas fa-chevron-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="about-container d-flex flex-column">
                        <h1>About Mohamed</h1>
                        <p>I am Mohamed Moawya graduated from faculty of Engineering, Communication & Electonics Department, Helwan Univeristy in 2019. I will make it simple for you. You will never regret hiring someone like me because I am always the smartest person in the room and that's because I always focus on details. Learning is always the key. Therefore, I am keen on learning new stuff to keep myself on the track. With all I mentioned above, I am sure I will fit in properly and be a great addition to the team. Finally, I am really interested in joining such a great well-known business where I will be more than willing to learn, gain experience and improve my skills. For more information about me, kindly check my<a href={ResumeLink} target="blank" title="Click me"> resume</a>.
                        </p>

                        <h2 className='mt-5'>Skills</h2>
                        <div className='skills d-flex justify-content-around'>
                            <div className='d-flex justify-content-around' style={{ width: 'calc(100% / 3)' }}>
                                <div style={{ color: 'red', fontSize: '55px' }}><i className="fab fa-html5"></i></div>
                                <div style={{ color: 'blue', fontSize: '55px' }}><i className="fab fa-css3-alt"></i></div>
                                <div style={{ color: '#ffc107c7', fontSize: '55px' }}><i className="fab fa-js-square"></i></div>
                            </div>
                            <div className="d-flex justify-content-around" style={{ width: 'calc(100% / 3)' }}>
                                <div style={{ color: '#007bff', fontSize: '55px' }}><i className="fab fa-react"></i></div>
                                <div style={{ color: 'purple', fontSize: '55px' }}><i className="fab fa-resolving"></i></div>
                                <div style={{ color: '#ef00ff', fontSize: '55px' }}><i className="fab fa-sass"></i></div>
                            </div>
                            <div className="d-flex justify-content-around" style={{ width: 'calc(100% / 3)' }}>
                                <div style={{ color: 'purple', fontSize: '55px' }}><i className="fab fa-bootstrap"></i></div>
                                <div style={{ color: 'orange', fontSize: '55px' }}><i className="fab fa-git-square"></i></div>
                                <div style={{ color: '#b7afaf', fontSize: '55px' }}><i className="fab fa-github-square"></i></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <footer id="about-footer">
                <div id='icons-container' className="d-flex justify-content-center">
                    <a href={facebookLink} title="Facebook" target="blank">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href={GithubLink} title="Github" target="blank">
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a href={LinkedinLink} title="Linkedin" target="blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={CodepenLink} title="Codepen" target="blank">
                        <i className="fab fa-codepen"></i>
                    </a>
                    <a href={FreeCodeCampLink} title="FreeCodeCamp" target="blank">
                        <i className="fab fa-free-code-camp"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
}
export default About