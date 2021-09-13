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

    sortShelters() {
        // 2
        if (this.state.sorted === true) {
            let sheltersCopy = [...this.filterShelters()];
            sheltersCopy.sort(this.compareShelters())
            return sheltersCopy;
        } else {
            return this.filterShelters()
        }
    }

    compareShelters = () => {
        //3
        return function (a, b) { 
            //the parameters (a and b)are two elements from the array
              let nameA = a.zipcode
              let nameB = b.zipcode 
             
            //if a appears before the second argument (b), return negative numner
              if (nameA < nameB) { //ascending
                return -1;
              }
            
              //if first arg appears after, return positive number
              if (nameA > nameB) { //descending
                return 1;
              }
            
              // if args are equal we return 0
              return 0;
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
        console.log("shelter", this.props)
            // const shelters = this.props.shelters.map((shelter, index) => {
            //     return <ShelterDisplay
            //         key={index}
            //         id={shelter.id}
            //         shelter_id={shelter.shelter_id}
            //         name={shelter.name}
            //         address={shelter.street_address}
            //         city={shelter.city}
            //         state={shelter.state}
            //         zipcode={shelter.zipcode}
            //         email={shelter.email}
            //         phone={shelter.phone}
            //     />
            // })

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
                {this.props.loading ? <h3>Loading...</h3> : this.sortShelters().map((shelter, index) => {
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
                }) }
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
