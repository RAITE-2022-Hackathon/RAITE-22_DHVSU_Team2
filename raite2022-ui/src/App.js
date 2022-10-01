import React, { useState, UseEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Pages
import LoginPage from './Pages/Login Page/loginPage'
import RegisterPage from './Pages/Register Page/registerPage'
import Dashboard from './Pages/Dashboard/dashboard'
import LandingPage from './Pages/Landing Page/landingPage';

function App() {
  const [ user, setUser ] =useState(localStorage.token ? localStorage.token : null)
  return (
    <div>
    
      {!user && 
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser}/>} />
        <Route path="*" element={<LandingPage/>} />
        <Route path="/" element={<LandingPage/>} />
      </Routes>
      }
      {user && 
      <>
        
          <Routes>
            <Route path="/coins" element={<Dashboard />} />
          </Routes>
        
      </>
      }
    {/* <Dashboard/> */}
    {/* <RegisterPage/> */}
    {/* <LoginPage setUser={setUser}/> */}
    
    
    </div>
  );
}

export default App;
