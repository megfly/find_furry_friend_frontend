//action object creator function...functions taht return objects

export const getPets = () => {
    debugger 
    //thunk two steps, return a function
    return dispatch => {
        dispatch({type: "LOADING_PETS"})
        debugger 
            fetch("http://localhost:3001/api/v1/pets")
                .then(res => res.json())
                .then(pets => {
                    dispatch({type: "PETS_LOADED", payload: pets})
                })
    }
}

