import React from 'react';

import Project from './Project/Project'
import './Projects.css';

export const Projects : React.FC = (props: any): JSX.Element => {
    return (
        <div>
            My projects
            <Project />
            <Project />
        </div>
    );
}

export default Projects;