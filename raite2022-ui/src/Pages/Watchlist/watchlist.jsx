import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container';

import getCoins from '../../utils/getCoins'
import getWatchlist from '../../utils/getWatchlist';

//Components
import NavigationBar from '../../Components/NavigationBar';
import CryptoList from '../../Components/CryptoList'
import Paginate from '../../Components/Paginate'

const watchlist = () => {
    const {id} = useParams()
    const [ coinsData, setCoinsData ] = useState([])
    const [ currentPage, SetCurrentPage ] = useState(1)
    const [ postPerPage, setPostsPerPage] = useState(8)


    useEffect(() => {
        (async () => {
            const data = await getCoins()
            setCoinsData(data)
        })()
    },[])

    const indexOfLastData = currentPage * postPerPage
    const indexOfFirstData = indexOfLastData - postPerPage
    const currentData = coinsData.slice(indexOfFirstData, indexOfLastData)
    const paginate = (pageNumber) =>{
        SetCurrentPage(currentData)
    }

  return (
    <>
    <NavigationBar/>
    <Container className='w-75 mx-auto'>
        <CryptoList coinsData={currentData}/>
        <Paginate dataPerPage={postPerPage} totalData={coinsData.length} paginate={paginate}/>
        
    </Container>
    </>
  )
}

export default watchlist