import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './components/landingpage/LandinPage.jsx';
import Home from './components/home/Home.jsx'
import NotFound from './components/notfound/NotFound.jsx'


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