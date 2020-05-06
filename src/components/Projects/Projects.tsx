import React from 'react';

import Project from './Project/Project'
import './Projects.css';

export const Projects : React.FC = (): JSX.Element => {
    return (
        <section id="projects" className="projects">
            My projects
            <Project />
            <Project />
        </section>
    );
}

export default Projects;