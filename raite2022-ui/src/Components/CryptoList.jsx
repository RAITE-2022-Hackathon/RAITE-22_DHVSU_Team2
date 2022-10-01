import React from 'react'
import CryptoCard from './CryptoCard'

import Container from 'react-bootstrap/esm/Container'

const CryptoList = ({coinsData}) => {
  return (
    <Container className='mx-auto'>
      {coinsData.map((coin, index) => {
        return(<CryptoCard
          key={index}
          image={coin.image}
          name={coin.name}
          price={coin.current_price}/>)
      })}
    </Container>
  )
}

export default CryptoList