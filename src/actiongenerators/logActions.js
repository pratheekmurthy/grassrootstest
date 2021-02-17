
const addUser=(data)=>{
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export const login =() =>{
    return {type : 'TOGGLE_STATE'}
}

export const startadduser = (id) => {
    return (dispatch) => {
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            const result = myJson.filter((user)=>{
                return user.id === id
            })
            if(result.length >0){
                dispatch(addUser(result[0]))
            }
            

            
          });
       
        
    }
}