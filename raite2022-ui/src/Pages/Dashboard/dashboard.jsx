import React, { useState, useEffect} from 'react'
import axios from 'axios'

import getCoins from '../../utils/getCoins'

import Container from 'react-bootstrap/esm/Container'

//Components
import NavigationBar from '../../Components/NavigationBar';
import CryptoList from '../../Components/CryptoList'
import Paginate from '../../Components/Paginate'
import TableData from '../../Components/TableData';

const dashboard = () => {
    const [ coinsData, setCoinsData ] = useState([])
    const [ currentPage, SetCurrentPage ] = useState(1)
    const [ postPerPage, setPostsPerPage] = useState(8)

    useEffect(() => {
        (async () => {
            const data = await getCoins()
            setCoinsData(data)
        })()
        console.log(coinsData)
    },[])

    const indexOfLastData = currentPage * postPerPage
    const indexOfFirstData = indexOfLastData - postPerPage
    const currentData = coinsData.slice(indexOfFirstData, indexOfLastData)
    const paginate = (pageNumber) =>{
        SetCurrentPage(pageNumber)
    }

  return ( 
    <>
    <NavigationBar/>
    <Container className='w-75 mx-auto'>
        {/* <CryptoList coinsData={currentData}/> */}
        <TableData data={currentData}/>
        <Paginate dataPerPage={postPerPage} totalData={coinsData.length} paginate={paginate}/>
        
    </Container>
    </>
  )
  
}

export default dashboard