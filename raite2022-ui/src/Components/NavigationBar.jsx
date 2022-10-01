import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

const NavigationBar = () => {
  const navigate = useNavigate()
  const [ userName, setUserName ] = useState('')
  const [ id, setId ] = useState()
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    if(token){
      setUserName(token.userName)
      setId(token.id)
    }
    
    

  },[])
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/coins">Coins</Nav.Link>
          <Nav.Link href={`/watchlist/${id}`}>Watchlist</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          {userName ? 
          <Navbar.Text>
            Signed in as: <a href="#profile">{userName}</a>
            <button  onClick={() => {localStorage.clear()
            navigate('*')}}>Logout</button>
          </Navbar.Text> : 
          <Navbar.Text>
            <a href="/login">Login</a>
          </Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar