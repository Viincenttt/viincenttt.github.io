import React from 'react';

import './Profile.css';

export const Profile : React.FC = (props: any): JSX.Element => {
    return (
        <section id="profile" className="profile">
            <h1>Vincent Kok</h1>
            <h2>Software engineer</h2>

            <p>
                Software engineer with over 10 years of experience in .NET, web-development and software engineering
            </p>

            <a href="#projects" className="button">View my work</a>
        </section>
    );
}

export default Profile;