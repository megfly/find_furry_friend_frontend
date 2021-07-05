import React, { Component } from 'react'
import  { connect }  from 'react-redux'

class ShelterContainer extends Component {
    render() {
        return (
            <div>
                
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

export default connect(mapStateToProps)(ShelterContainer)
