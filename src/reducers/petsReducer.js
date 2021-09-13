export default (state = {pets: [], loading: false}, action) => {
    switch(action.type){
        case("LOADING_PETS"): 
            //always return new state..never destructive
            return {...state, loading: true}
        case("PETS_LOADED"): 
            return { ...state, 
                loading: false,
                pets: action.payload
            }
        default:
            return state 
    }
}