import React, { Component } from 'react'
import { connect } from 'react'
import { getPets } from '../actions/pets'
// //import PetDisplay from '../components/PetDisplay'

class PetContainer extends Component { 

    componentDidMount(){
        // debugger  
        // this.props.getPets()
    }

    render() {
        console.log("pet", this.props)
        return <div></div>
//         // const pets = this.props.pets.map((pet, index) => {
//         //         return <PetDisplay
//         //             key={index}
//         //             shelter_id={pet.shelter_id}
//         //             id={pet.id}
//         //             name={pet.name}
//         //             animal_type={pet.animal_type}
//         //             breed={pet.breed}
//         //             size={pet.size}
//         //             gender={pet.gender}
//         //             age={pet.age}
//         //             color={pet.color}
//         //             image={pet.image}
//         //             good_with_children={pet.good_with_children}
//         //             good_with_dogs={pet.good_with_dogs}
//         //             good_with_cats={pet.good_with_cats}
//         //             house_trained={pet.house_trained}
//         //             vaccinated={pet.vaccinated}
//         //         />
//         //     })
//         // return (
//         //     <div>
//         //         {pets} 
//         //     </div>
//         // )
    }
}

// const mapStateToProps = state => { 
//     console.log(state) 
//     return {
//         pets: state.petsReducer.pets,
//         loading: state.petsReducer.loading
//     }
// }
// //error here????
// export default connect(mapStateToProps, { getPets })(PetContainer)
export default PetContainer