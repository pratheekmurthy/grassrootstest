const initialState = false

export const logReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'TOGGLE_STATE':{
            return !state;
        }
        default :{
            return state
        }
    }

}


//accounts reducer
const accountsInitialState = {}


export const accountsReducer=(state = accountsInitialState,action)=>{
    switch(action.type){
        case 'ADD_USER':{
            return action.payload
        }
        default : {
            return state
        }
    }
}

