import React from 'react'
import { Card } from "react-bootstrap";
import "./Box.css"

const PetDisplay = (props) => {
  console.log("petdisplay", props)

    return (
    
    <Card style={{ width: "18rem" }} className="box">
        {/* <Card.Img variant="top" src="holder.js/100px180" src={card.image} /> */}
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pet Name: {props.name}</Card.Title>
          <Card.Text>Animal: {props.animal_type}</Card.Text>
          <Card.Text>Age: {props.age}</Card.Text>
          <Card.Text>Breed: {props.breed}</Card.Text>
          <Card.Text>Gender: {props.gender}</Card.Text>
          <Card.Text>Color: {props.color}</Card.Text>
          <Card.Text>Size: {props.size}</Card.Text>
          <Card.Text>Vaccinated: {props.vaccinated}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{props.pet_id}</small>
        </Card.Footer>
      </Card>
    
    )

}

export default PetDisplay


                    // key={index}
                    // shelter_id={pet.shelter_id}
                    // id={pet.id}
                    // name={pet.name}
                    // animal_type={pet.animal_type}
                    // breed={pet.breed}
                    // size={pet.size}
                    // gender={pet.gender}
                    // age={pet.age}
                    // color={pet.color}
                    // image={pet.image}
                    // good_with_children={pet.good_with_children}
                    // good_with_dogs={pet.good_with_dogs}
                    // good_with_cats={pet.good_with_cats}
                    // house_trained={pet.house_trained}
                    // vaccinated={pet.vaccinated}