import React from 'react';

import './NavBar.css';

export const NavBar : React.FC = (): JSX.Element => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#profile">Profile</a>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;