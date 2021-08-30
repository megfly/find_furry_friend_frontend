import React from 'react'
import { Card } from "react-bootstrap";
import "./Box.css"

const ShelterDisplay = (props) => {
    // console.log("this is shelterdisplay props", props)

    return (
    
    <Card style={{ width: "18rem" }} className="box">
        {/* <Card.Img variant="top" src="holder.js/100px180" src={card.image} /> */}
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.address}</Card.Text>
          <Card.Text>{props.city}</Card.Text>
          <Card.Text>{props.state}</Card.Text>
          <Card.Text>{props.zipcode}</Card.Text>
          <Card.Text>{props.email}</Card.Text>
          <Card.Text>{props.phone}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{props.shelter_id}</small>
        </Card.Footer>
      </Card>
    
    )

}

export default ShelterDisplay

// key={index}
// id={shelter.id}
// shelter_id={shelter.shelter_id}
// name={shelter.name}
// address={shelter.street_address}
// city={shelter.city}
// state={shelter.state}
// zipcode={shelter.zipcode}
// email={shelter.email}
// phone={shelter.phone}
