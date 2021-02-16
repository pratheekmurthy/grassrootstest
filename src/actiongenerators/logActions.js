import { useScrollTrigger } from "@material-ui/core"

const addUser=(data)=>{
    // console.log(data,"acc")
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export const login =() =>{
    return {type : 'TOGGLE_STATE'}
}

export const startadduser = (id,data) => {
    return (dispatch) => {
        // console.log(id,"id")
        // console.log(data,"users")

        const result = data?.filter((ele)=>{
            return ele.id === id
        })
        // console.log(result[0])
        // console.log(result,"filter")
        dispatch(addUser(result))
        
    }
}