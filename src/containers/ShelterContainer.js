import React, { Component } from 'react'
import  { connect }  from 'react-redux'
import { getShelters } from '../actions/shelters'
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import { Row } from 'react-bootstrap'

class ShelterContainer extends Component {
    componentDidMount(){
        this.props.getShelters()
    }

    render() {
        const shelters = this.props.shelters.map((shelter, index) => {
            return <CardGroup>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>{shelter.name}</Card.Title>
                <Card.Text>
                  <p>{shelter.street_address}</p>
                  <p>{shelter.city}</p>
                  <p>{shelter.zipcode}</p>
                  <p>{shelter.email}</p>
                  <p>{shelter.phone}</p>
                </Card.Text>
              </Card.Body>
            </Card>
              </CardGroup>
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
