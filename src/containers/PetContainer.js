import React, { Component } from 'react'
import { connect } from 'react'
import { getPets } from '../actions/pets'

class PetContainer extends Component {
    render() {
        const pets = this.props.pets.map((pet, index) => {
                return <ShelterDisplay
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
            })
        return (
            <div>
                {pets} 
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        pets: state.petsReducer.pets,
        loading: state.petsReducer.loading
    }
}

export default connect(mapStateToProps, { getPets })(PetContainer)

// :shelter_id,
// :name,
// :animal_type,
// :breed,
// :size,
// :gender,
// :age,
// :color,
// :image,
// :good_with_children,
// :good_with_dogs,
// :good_with_cats,
// :house_trained,
// :vaccinated