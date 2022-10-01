import React, { useState, useEffect } from 'react'
import NavigationBar from '../../Components/NavigationBar'
import ListGroup from 'react-bootstrap/ListGroup';

import getFeed from '../../utils/getFeed';
const home = () => {
  const [ feed, setFeed ] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getFeed()
      setFeed(data)
  })()
  },[])
  return (
    <div>
      <NavigationBar/>
      {/* <ListGroup>
      {feed.map((post, index) => {
        return(
          <ListGroup.Item key={index}>{post.postDetailes}</ListGroup.Item>
        )
      })}
    </ListGroup> */}
    <>
      {feed.map((post,index) => (
        <ListGroup key={index} horizontal={index} className="my-2">
          <ListGroup.Item >User: {post.user.userName}</ListGroup.Item>
          <ListGroup.Item>{post.postDetailes}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
    </div>
  )
}

export default home