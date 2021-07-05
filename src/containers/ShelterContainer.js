import React, { Component } from 'react'
import  { connect }  from 'react-redux'

class ShelterContainer extends Component {
    componentDidMount(){
        
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

export default connect(mapStateToProps)(ShelterContainer)
