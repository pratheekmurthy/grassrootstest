import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../actiongenerators/logActions'
import Header from './sidebar1'
import {Paper} from '@material-ui/core'

const User =(props)=>{
    const [account,setaccount] = useState({})
    const user = useSelector(state => state.accounts)
    const dispatch = useDispatch()

   
    
    
    return (<div>
        <Header/>
       <Paper elevation={3} className="paper">
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
       </Paper> 
    </div>
   )
}

export default User