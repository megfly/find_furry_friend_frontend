import React, { Component } from 'react'
import  { connect }  from 'react-redux'
import { getShelters } from '../actions/shelters'
import Card from 'react-bootstrap/Card';

class ShelterContainer extends Component {
    componentDidMount(){
        this.props.getShelters()
    }

    render() {
        const shelters = this.props.shelters.map((shelter, index) => {
            return <li key={index}>{shelter.name}</li>
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
