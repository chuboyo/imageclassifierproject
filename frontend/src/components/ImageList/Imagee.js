import React from 'react'
import { Card } from 'react-bootstrap'

function Imagee(props) {
  return (
    <Card style={{ width: '18rem'}} className='mx-auto mb-4 mt-2'>
      <Card.Img variant="top" src={props.picture} style={{ height: '11rem'}}/>
      <Card.Body>
        <Card.Title>Classified as - {props.name}</Card.Title>
      </Card.Body>
    </Card>

    

  )
}

export default Imagee
