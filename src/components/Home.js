import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../actiongenerators/logActions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';


const Home =(props)=>{
    const dispatch = useDispatch()


    return (<div>
        <h2>Home Page</h2>
       <div className="row">
           <div className="col md-4"></div>
           <button onClick={()=>{
           localStorage.removeItem('token')
           dispatch(login())

       }} className="btn btn-primary"><ExitToAppIcon/></button></div> 
        <div className="homeprofileCard">
        <div className="card">
       <button className="btn btn-primary" onClick={()=>{
           props.history.push('/user')
       }}><PersonIcon/> Show Profile</button>
        </div>
       </div>
    </div>)
}

export default Home