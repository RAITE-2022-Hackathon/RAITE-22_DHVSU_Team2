import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

const registerPage = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setfName] = useState('');
  const [lastName, setlName] = useState('');
  const [birthDay, setBirthDay] = useState('')

  const setText = {
        "userName": setUserName,
        "password": setPassword,
        "conPassword": setConPassword,
        "email": setEmail,
        "firstName": setfName,
        "lastName": setlName,
        "birthDay": setBirthDay
  }

  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setText[name](value);
  }

  async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('/api/user/create-user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName,
        password,
        email,
        firstName,
        lastName,
        birthDay
			})
		})

		const data = await response.json()
    console.log(data.message)
		navigate('/login')
		
	}

  return (
    <Form className='w-25 mx-auto' onSubmit={registerUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => onInputChange(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="userName"  placeholder="Username" value={userName} onChange={(e) => onInputChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName"  placeholder="First Name" value={firstName} onChange={(e) => onInputChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastName"  placeholder="Last Name" value={lastName} onChange={(e) => onInputChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Birth Date</Form.Label>
        <Form.Control type="date" name="birthDay"  value={birthDay} onChange={(e) => onInputChange(e)}/>
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

export default registerPage