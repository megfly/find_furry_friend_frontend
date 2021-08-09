import React, { Component } from 'react'
import  { connect }  from 'react-redux'
import { getShelters } from '../actions/shelters'
import { Card } from "react-bootstrap";
// import { CardGroup } from 'react-bootstrap';
// import { Row } from 'react-bootstrap'

class ShelterContainer extends Component {
    componentDidMount(){
        this.props.getShelters()
    }

    render() {
        const shelters = this.props.shelters.map((shelter, index) => {
            return (
            <div className="Shelter">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
                        </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
            )
                  {/* <p>{shelter.street_address}</p>
                  <p>{shelter.city}</p>
                  <p>{shelter.zipcode}</p>
                  <p>{shelter.email}</p>
                  <p>{shelter.phone}</p> */}
   
        })
        return (
            <div className="ShelterContainer">
                <ul>{this.props.loading ? <h3>Loading...</h3> : shelters}</ul>
            </div>
        )
    }
}

//structure what your props look like
const mapStateToProps = state => {
    console.log(state)
    return {
        shelters: state.shelterReducer.shelters,
        loading: state.shelterReducer.loading
    }
}

export default connect(mapStateToProps, { getShelters })(ShelterContainer)
