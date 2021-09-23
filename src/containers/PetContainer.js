import React, { Component } from 'react'
import { Fragment } from 'react'
import  { connect }  from 'react-redux'
import { getPets } from '../actions/pets'
import PetDisplay from '../components/PetDisplay'

class PetContainer extends Component {

    componentDidMount(){ 
        //this is working, when this is commented out- the pets arent in state
        this.props.getPets()
    }

    //MY PETS ARE IN MY STATE BUT THEY ARENT GOING IN MY PROPS

    render() {
        console.log("pets props", this.props)
                // const pets = this.props.pets.map((pet, index) => {
        //         return <PetDisplay
        //             key={index}
        //             shelter_id={pet.shelter_id}
        //             id={pet.id}
        //             name={pet.name}
        //             animal_type={pet.animal_type}
        //             breed={pet.breed}
        //             size={pet.size}
        //             gender={pet.gender}
        //             age={pet.age}
        //             color={pet.color}
        //             image={pet.image}
        //             good_with_children={pet.good_with_children}
        //             good_with_dogs={pet.good_with_dogs}
        //             good_with_cats={pet.good_with_cats}
        //             house_trained={pet.house_trained}
        //             vaccinated={pet.vaccinated}
        //         />
        //     }
        // )
        return (
            <div>
                
            </div>
        )

        // const pets = this.props.pets.map((pet, index) => {
        //         return <PetDisplay
        //             key={index}
        //             shelter_id={pet.shelter_id}
        //             id={pet.id}
        //             name={pet.name}
        //             animal_type={pet.animal_type}
        //             breed={pet.breed}
        //             size={pet.size}
        //             gender={pet.gender}
        //             age={pet.age}
        //             color={pet.color}
        //             image={pet.image}
        //             good_with_children={pet.good_with_children}
        //             good_with_dogs={pet.good_with_dogs}
        //             good_with_cats={pet.good_with_cats}
        //             house_trained={pet.house_trained}
        //             vaccinated={pet.vaccinated}
        //         />
        //     }
        // )
        // return (
        //     <div>
        //         {pets} 
        //     </div>
        // )
    }
}
        

//structure what your props look like
const mapStateToProps = state => {
    console.log("pet state", state)
    return {
        pets: state.petsReducer.shelters,
        loading: state.petsReducer.loading
    }
}

export default connect(mapStateToProps, { getPets })(PetContainer)
