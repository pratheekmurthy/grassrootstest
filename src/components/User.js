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
       <div>
        <h2>Admin Details</h2>
        <Paper elevation={3} className="homeprofileCard">
        {
            user.id ? (<div>
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
    </div>
   )
}

export default User