import React, { Component } from 'react'
import { Fragment } from 'react'
import  { connect }  from 'react-redux'
import { getShelters } from '../actions/shelters'
import ShelterDisplay from '../components/ShelterDisplay'

class ShelterContainer extends Component {
    //local state
    state = {
        sorted: false,
        searchinput: ''
    }

    componentDidMount(){
        this.props.getShelters()
    }

    toggleState = () => {
        // 1
        if (this.state.sorted) {
            this.setState({
                sorted: false
            })
        } else {
            this.setState({
                sorted: true 
            })
        }
    }

    handleSearch = (event) => {
        // console.log("search", event.target.value)
        this.setState({
            searchinput: event.target.value
        })
    }

    filterShelters = () => {
        if (this.state.searchinput !== '') {
            return this.props.shelters.filter(shelter => {
                // debugger 
                return shelter.zipcode.includes(this.state.searchinput)
            })
        } else {
            return this.props.shelters
        }
    }

    render() {
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
        <Fragment>
            <br />
            <input 
                type="text"
                name="shelter-search-by-zipcode"
                placeholder="search by zipcode..."
                onChange={this.handleSearch}
                value={this.state.searchinput}
            />
            <br />
            <div className="grid">
                {this.props.loading ? <h3>Loading...</h3> : shelters }
                {/* shelters */}
            </div>
        </Fragment>
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
