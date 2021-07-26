//action object creator function...functions that return objects

export const getShelters = () => {
    //thunk two steps, return a function
    return dispatch => {
        dispatch({type: "LOADING_SHELTERS"})
            fetch("http://localhost:3001/api/v1/shelters")
                .then(res => res.json())
                .then(shelters => {
                    dispatch({type: "SHELTERS_LOADED", payload: shelters})
                })
    }
}