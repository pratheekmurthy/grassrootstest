import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../actiongenerators/logActions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import Header from './header'


const Home =(props)=>{
    const dispatch = useDispatch()

   
    
    
    
    return (<div>
      <h1>Home Page</h1>
       
    </div>)
}

export default Home



// <div className="row">
//            <div className="col md-4"></div>
//            <button onClick={()=>{
//            localStorage.removeItem('token')
//            dispatch(login())

//        }} className="btn btn-primary"><ExitToAppIcon/></button></div> 
//         <div className="homeprofileCard">
//         <div className="card">
      
//        <button className="btn btn-primary" onClick={()=>{
//            props.history.push('/user')
//        }}> <PersonIcon/>Show Profile</button>
//         </div>
//        </div>