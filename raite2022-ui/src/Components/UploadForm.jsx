import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

import createProduct from '../utils/createProduct';


const UploadForm = () => {
    const [ productName, setProductName] = useState('')
    const [ quantity, setQuantity] = useState()
    const [ imageForm, setImageForm] = useState(null)

    const setText = {
        "productName": setProductName,
        "quantity": setQuantity,
  }

  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setText[name](value);
  }

  // const loginUser = (event) => {
  //   event.preventDefault()

  //   login(email,password)
  // }

  const fileShit = (e) => {
    e.preventDefault();
    
    const data = new FormData();

    data.append('name', 'asdfasdf');
    data.append('quantity', 5);
    data.append('image', imageForm);

    // (async () => {
    //     updateProduct(3, data);
    // })()
    (async () => {
      for (const value of data.values()) {
        console.log(value);
      }
        createProduct(data);
    })()

  }

  return (
    <Container>
      <Form className="w-75 mx-auto py-2" encType="multipart/form-data">

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label value={productName} onChange={(e) => onInputChange(e)}>Product Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label value={quantity} onChange={(e) => onInputChange(e)}>quantity</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formFile" name="image" onChange={(e) => setImageForm(e.target.files[0])}>
        <Form.Label>File</Form.Label>
        <Form.Control type="file"/>
      </Form.Group>

    </Form>

    <Button variant="primary" className="mx-auto d-block cyan-900" type="submit" onClick={(e) => fileShit(e)}>Submit</Button>
    </Container>

  )
}

export default UploadForm