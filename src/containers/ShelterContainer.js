import React, { Component } from 'react'
import  { connect }  from 'react-redux'
import { getShelters } from '../actions/shelters'
import ShelterDisplay from '../components/ShelterDisplay'

class ShelterContainer extends Component {
    componentDidMount(){
        this.props.getShelters()
    }

    render() {
            const shelters = this.props.shelters.map((shelter, index) => {
                return <ShelterDisplay
                    key={index}
                    address={shelter.street_address}
                    city={shelter.city}
                    zipcode={shelter.zipcode}
                    email={shelter.email}
                    phone={shelter.phone}
                />
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
