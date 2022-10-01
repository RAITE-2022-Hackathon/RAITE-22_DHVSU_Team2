import React from 'react'
import CryptoCard from './CryptoCard'

import Container from 'react-bootstrap/esm/Container'

const CryptoList = ({coinsData}) => {
  return (
    <Container className='d-flex justify-content-around'>
      {coinsData.map((coin, index) => {
        return(<CryptoCard
          key={index}
          id={coin.id}
          image={coin.image}
          name={coin.name}
          price={coin.current_price}/>)
      })}
    </Container>
  )
}

export default CryptoList