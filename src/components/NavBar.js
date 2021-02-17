import React from 'react'
import {Link,Switch,Route,useHistory} from 'react-router-dom'
import Header from './sidebar1'
import Login from './Login'
import Home from './Home'
import User from './User'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import {useSelector} from 'react-redux'

const Navbar =(props)=>{
    const isLogin = useSelector(state => state.log)
    let history = useHistory();

   
    return (<div>
        {
            isLogin ? (<Header/>):(history.push('/user'))
        }
        
       
        
    </div>)
}

export default Navbar