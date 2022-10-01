import React, { useState, UseEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import NavigationBar from './Components/NavigationBar';

//Pages
import LoginPage from './Pages/Login Page/loginPage'
import LandingPage from './Pages/Landing Page/landingPage'
import RegisterPage from './Pages/Register Page/registerPage'
import Dashboard from './Pages/Dashboard/dashboard'

function App() {
  const [ user, setUser ] = useState(localStorage.getItem('token'))
  return (
    <>
    <NavigationBar user={user}/>
    {/* <Dashboard/> */}
    <RegisterPage/>
    </>
  );
}

export default App;
