import React, { useState } from 'react';
import { Trainers } from './components/Trainers';
import { NavLink, Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
