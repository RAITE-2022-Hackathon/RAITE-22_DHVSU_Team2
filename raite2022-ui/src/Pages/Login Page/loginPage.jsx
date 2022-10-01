import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const loginPage = ({setUser}) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('');

  const setText = {
    "userName": setUserName,
    "password": setPassword
}

  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setText[name](value);
  }
  async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('/api/user/log-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName,
        password
			})
		})

		const data = await response.json()
    const token = JSON.stringify(data.data)
    console.log(token)
    localStorage.setItem('token',token)
    setUser(localStorage.token)
    navigate('/home')
    
    // console.log(localStorage.token)
		// navigate('/login')
		
	}

  return (
    <Form className='w-25 mx-auto' onSubmit={loginUser}>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="userName"  placeholder="Username" value={userName} onChange={(e) => onInputChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"  placeholder="Password" value={password} onChange={(e) => onInputChange(e)}/>
      </Form.Group>

      

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default loginPage