import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';

import singleCoin from '../../utils/singleCoin'

import HistoricalChart from '../../Components/HistoricalChart';


const coinPage = ({}) => {
    const {id} = useParams()
    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ description, setDiscription ] = useState('')

    useEffect(()=> {
        (async () => {
            const data = await singleCoin(id)
            setDiscription(data.description.en)
            setName(data.name)
            setImage(data.image.thumb)
            console.log(data.image)
            setPrice(data.price)
        })()
    },[])
  return (
    <Container>
        <HistoricalChart id={id}/>
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: {price}
        </Card.Text>
      </Card.Body>
    </Card>
    <Button variant="dark">Follow</Button>
        <p>{description}</p>
    </Container>
  )
}

export default coinPage