import React from 'react';

import '../style/ProjectCard.css';

const ProjectCard = (props) => {
    const { projectName, projectImage, codeLink, projectLink } = props
    return (
        <div className='card-container'>
            <a href={projectLink} target='blank'><div className='image' style={{ backgroundImage: `url(${projectImage})` }}></div></a>
            <div className='info'>
                <span>{projectName}</span>
                <div>
                    <a href={codeLink} target='blank'><i className="fas fa-code" title='Code'></i></a>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard