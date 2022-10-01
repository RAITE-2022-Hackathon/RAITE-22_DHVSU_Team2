import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';

import singleCoin from '../../utils/singleCoin'
import addCoinToWatchlist from '../../utils/addCoinToWatchlist';

import HistoricalChart from '../../Components/HistoricalChart';



const coinPage = ({}) => {
    const {id} = useParams()
    const [ name, setName ] = useState('')
    const [ image, setImage ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ description, setDiscription ] = useState('')
    const [ userName, setUserName ] = useState('')
    const [ follow, setFollow ] = useState(false)
    useEffect(()=> {

      const token = JSON.parse(localStorage.getItem('token'))
      if(token){
      setUserName(token.userName)
      }
        (async () => {
            const data = await singleCoin(id)
            setDiscription(data.description.en)
            setName(data.name)
            setImage(data.image.thumb)
            console.log(data.image)
            setPrice(data.market_data.current_price.usd)
        })()
    },[])

    const pushFunction = (userName, name) =>{
      addCoinToWatchlist(userName, name)
    }
    // useEffect(()=>{
    //   addCoinToWatchlist(userName, name)
    // },[follow])
  return (
    <Container>
        <HistoricalChart id={id}/>
        <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Price: {price} $
        </Card.Text>
      </Card.Body>
    </Card>
    <button  onClick={() => pushFunction(userName, name)}> Follow </button>
    <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: description }}></p>
    </Container>
  )
}

export default coinPage