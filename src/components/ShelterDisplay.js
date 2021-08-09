import React from 'react'
import { Card } from "react-bootstrap";
import "./Box.css"

const ShelterDisplay = (props) => {
    console.log("this is shelterdisplay props", props)

    return (
          
        <Card style={{ width: "18rem" }} className="box">
        {/* <Card.Img variant="top" src="holder.js/100px180" src={card.image} /> */}
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    
    )

    // const renderCard = (props, index) => {
    //     <Card style={{ width: "18rem" }} key={index} className="box">
    //     {/* <Card.Img variant="top" src="holder.js/100px180" src={card.image} /> */}
    //     <Card.Body>
    //       <Card.Title>{props.name}</Card.Title>
    //       <Card.Text>{props.text}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // }


    // return (
    //     <div className="grid">{props.map(renderCard)}</div>
    //     )
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
