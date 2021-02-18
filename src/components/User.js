import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../actiongenerators/logActions'
import Header from './sidebar1'

const User =(props)=>{
    const [account,setaccount] = useState({})
    const user = useSelector(state => state.accounts)
    const dispatch = useDispatch()

   
    
    return (<div>
        <Header />
        <div className="accountBox">
        <h2>Admin page</h2>
        {
            user.id ? (<div class="card">
                <h6>user-id :{user.id}</h6>
                <p>user Email : {user.email}</p>
                <h6>user Password : {user.password}</h6>
            </div>):(<div>
                {
                    window.location.reload()
                }
            </div>)
        }
        
    </div>
    </div>)
}

export default User