import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

const User =(props)=>{
    const user = useSelector(state => state.accounts)
    

    
    return (<div className="accountBox">
        <h2>Admin page</h2>
        {
            user.length === 1 ? (<div class="card">
                <h6>user-id :{user[0][0].id}</h6>
                <p>user Email : {user[0][0].email}</p>
                <h6>user Password : {user[0][0].password}</h6>
            </div>):(<div>
                <h3>Login to acess this data</h3>
            </div>)
        }
        
    </div>)
}

export default User