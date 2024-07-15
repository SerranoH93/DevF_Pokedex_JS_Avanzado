import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './views/landingpage/LandinPage.jsx';
import Home from './views/home/Home.jsx'
import NotFound from './views/notfound/NotFound.jsx'


function App() {
  const location = useLocation();

  function logout() {
    navigate('/');
  }

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  );

}
export default App