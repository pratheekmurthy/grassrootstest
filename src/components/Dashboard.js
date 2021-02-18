import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../actiongenerators/logActions'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import Header from './sidebar1'
import Grid from '@material-ui/core/Grid';


const Dashboard =(props)=>{
    const dispatch = useDispatch()

    
    
    
    
    return (<div>
      <Header/>
      <img src="/dashboard5.jpg" className="image"/>  
    </div>)
}

export default Dashboard

