import React, { Component } from 'react'
import { Fragment } from 'react'
import  { connect }  from 'react-redux'
import { getPets } from '../actions/pets'
import PetDisplay from '../components/PetDisplay'

class PetContainer extends Component {
    //local state
    state = {
        searchinput: ''
    }

    componentDidMount(){ 
        this.props.getPets()
    }

    handleSearch = (event) => {
        // console.log("search", event.target.value)
        this.setState({
            searchinput: event.target.value
        })
    }

    filterPets = () => {
        if (this.state.searchinput !== '') {
            return this.props.pets.filter(pet => {
                // debugger 
                return pet.breed.includes(this.state.searchinput)
            })
        } else {
            return this.props.pets
        }
    }

    render() {
       // console.log("pets props", this.props)

        return (
            <Fragment>
                <br />
                <input 
                    type="text"
                    name="pet-search-by-breed"
                    placeholder="search by breed..."
                    onChange={this.handleSearch}
                    value={this.state.searchinput}
                />
                <br />
                <div className="grid">
                    {this.props.loading ? <h3>Loading...</h3> : this.filterPets().map((pet, index) => {
//debugger 
                    return <PetDisplay
                     
                        key={index}
                        shelter_id={pet.shelter_id}
                        id={pet.id}
                        name={pet.name}
                        animal_type={pet.animal_type}
                        breed={pet.breed}
                        size={pet.size}
                        gender={pet.gender}
                        age={pet.age}
                        color={pet.color}
                        image={pet.image}
                        good_with_children={pet.good_with_children}
                        good_with_dogs={pet.good_with_dogs}
                        good_with_cats={pet.good_with_cats}
                        house_trained={pet.house_trained}
                        vaccinated={pet.vaccinated}
                />
                    }) }
                   
                </div>
            </Fragment>
            ) 
        }
    }


//structure what your props look like
const mapStateToProps = state => {
   // console.log("pet state", state)
    return {
        pets: state.petsReducer.pets,
        loading: state.petsReducer.loading
    }
}

export default connect(mapStateToProps, { getPets })(PetContainer)
