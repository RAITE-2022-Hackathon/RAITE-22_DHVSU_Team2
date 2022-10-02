import React, { useState, UseEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//Pages
import LoginPage from './Pages/Login Page/loginPage'
import RegisterPage from './Pages/Register Page/registerPage'
import Dashboard from './Pages/Dashboard/dashboard'
import LandingPage from './Pages/Landing Page/landingPage';
import CoinPage from './Pages/Coin Page/coinPage'
import Home from './Pages/Home/home'
import WatchList from './Pages/Watchlist/watchlist'

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
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/coins" element={<Dashboard />} />
            <Route path="/coinPage/:id" element={<CoinPage/>}/>
            <Route path="/watchlist/coinPage/:id" element={<CoinPage/>}/>
            <Route path='/watchlist/:id' element={<WatchList/>}/>
          </Routes>
        
      </>
      }
    </div>
  );
}

export default App;
