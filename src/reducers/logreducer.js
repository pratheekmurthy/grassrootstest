import Data from '../data.json'

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

const accountsInitialState =Data

export const accountsReducer=(state = accountsInitialState,action)=>{
    switch(action.type){
        case 'ADD_USER':{
            return [...state,action.payload]
        }
        default : {
            return [state]
        }
    }
}

