import React, { Component } from 'react'
import  { connect }  from 'react-redux'
import { getShelters } from '../actions/shelters'
import ShelterDisplay from '../components/ShelterDisplay'

class ShelterContainer extends Component {
    componentDidMount(){
        this.props.getShelters()
    }

    render() {
        <h1>Animal Shelters</h1>
            const shelters = this.props.shelters.map((shelter, index) => {
                return <ShelterDisplay
                    key={index}
                    id={shelter.id}
                    shelter_id={shelter.shelter_id}
                    name={shelter.name}
                    address={shelter.street_address}
                    city={shelter.city}
                    state={shelter.state}
                    zipcode={shelter.zipcode}
                    email={shelter.email}
                    phone={shelter.phone}
                />
            })

        return (
            <div className="grid">
                {this.props.loading ? <h3>Loading...</h3> : shelters}
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
