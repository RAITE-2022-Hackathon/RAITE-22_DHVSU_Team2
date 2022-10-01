import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container'

import './Paginate.css'

const Paginate= ({ dataPerPage, totalData, paginate}) => {
    const pageNumbers = []

    for (let index = 1; index <= Math.ceil(totalData/dataPerPage); index++) {
        pageNumbers.push(index)
    }
  return (
    
    <Pagination className='mx-auto'>
        {pageNumbers.map((number) => {
            return(<Pagination.Item onClick={() => paginate(number)}>{number}</Pagination.Item>)
        })}
    </Pagination>
  )
}

export default Paginate