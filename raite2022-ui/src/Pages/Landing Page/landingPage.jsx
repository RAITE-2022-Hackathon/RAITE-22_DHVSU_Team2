import React, { useState, useEffect } from 'react'

import { periodicTable } from '../../Data/PeriodicTableJSON'

import TableData from '../../Components/TableData'
import Paginate from '../../Components/Paginate'
import Container from 'react-bootstrap/Container'
import ProductCarousel from '../../Components/ProductCarousel'
import UploadForm from '../../Components/UploadForm'

import './landingPage.css'

const landingPage = () => {
  const [ data, setData ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ dataPerPage, setDataPerPage] = useState(10)
  useEffect(()=>{
    setData(periodicTable)
  },[])


  //Get Current Data
  const indexOfLastData = currentPage * dataPerPage
  const indexOfFirstData = indexOfLastData - dataPerPage
  const currentData = data.slice(indexOfFirstData, indexOfLastData)

  //change page
  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  return (
    <Container className='mx-auto'>
      <ProductCarousel/>
      <TableData data = {currentData}/>
      <Paginate dataPerPage={dataPerPage} totalData={periodicTable.length} paginate={paginate}/>
      <UploadForm/>
    </Container>
  )
}

export default landingPage