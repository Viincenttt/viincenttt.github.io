import React from 'react';

import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import NavBar from '../UI/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Profile />
        <Projects />
      </main>      
    </div>
  );
}

export default App;
