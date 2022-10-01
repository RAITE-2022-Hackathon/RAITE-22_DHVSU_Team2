import React from 'react'
import Table from 'react-bootstrap/Table'

import './TableData.css'

const TableData = ({data}) => {
  return (
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th scope="col">Atomic Number</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Atomic Mass</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((element,index)=>{
                return(
                  <tr key={index}>
                    <th scope="row">{element.number}</th>
                    <td>{element.name}</td>
                    <td>{element.category}</td>
                    <td>{element.atomic_mass}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>  
      
  )
}

export default TableData