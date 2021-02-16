import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

const User =(props)=>{
    const user = useSelector(state => state.accounts)
    
   
    console.log(user)
    

    return (<div>
        <h2>Admin page</h2>
        {
            user.length > 0 ? (<div>
                <h4>user:id - {user[0][0].id}</h4>
                <h4>user Email - {user[0][0].email}</h4>
                <h4>user Password - {user[0][0].password}</h4>
            </div>):(<div>
                <h3>Login to acess this data</h3>
            </div>)
        }
        
    </div>)
}

export default User