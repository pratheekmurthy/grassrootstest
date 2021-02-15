const addUser=(data)=>{
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export const login =() =>{
    return {type : 'TOGGLE_STATE'}
}

export const startadduser = (data,handleRedirect) => {
    return (dispatch) => {
        dispatch(addUser(data))
        handleRedirect()
    }
}