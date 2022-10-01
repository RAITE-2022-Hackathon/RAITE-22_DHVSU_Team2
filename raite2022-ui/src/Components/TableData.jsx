import React from 'react'
import Table from 'react-bootstrap/Table'

import './TableData.css'

const TableData = ({data}) => {
  return (
        <Table striped bordered hover size="sm" >
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Coin</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((data,index)=>{
                return(
                  <tr key={index}  >
                    <th scope="row">{data.market_cap_rank}<a  href={`coinPage/${data.id}`}><img src={data.image} width='60px'/></a></th>
                    <td> {data.name}</td>
                    <td>{data.current_price}</td>
                    <td>{data.market_cap}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>  
      
  )
}

export default TableData