export default (state = {shelters: [], loading: false}, action) => {
    switch(action.type){
        case("LOADING_SHELTERS"): 
            //always return new state..never destructive
            return {...state, loading: true}
        case("SHELTERS_LOADED"): 
            return { ...state, 
                loading: false,
                shelters: action.payload
            }
        default:
            return state 
    }
}

