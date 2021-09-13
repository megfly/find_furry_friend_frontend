export default (state = {pets: [], loading: false}, action) => {
    debugger 
    switch(action.type){
        case("LOADING_PETS"): 
        debugger 
            //always return new state..never destructive
            return {...state, loading: true}
        case("PETS_LOADED"): 
        debugger
            return { ...state, 
                loading: false,
                pets: action.payload
            }
        default:
            return state 
    }
}