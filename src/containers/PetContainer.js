import React, { Component } from 'react'
import { connect } from 'react'
import { getPets } from '../actions/pets'

class PetContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("pets", state)
    return {
        pets: state.petsreducer.pets,
        loading: state.petsreducer.loading
    }
}

export default connect(mapStateToProps, { getPets })(PetContainer)