import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Header from './header'
import Login from './Login'
import Home from './Home'
import User from './User'
import Register from './Register'
import PrivateRoute from './PrivateRoute'

const Navbar =(props)=>{

    const handleRedirect =()=>{
        props.history.push('/user')
    }
    return (<div>
        <Header handleRedirect={handleRedirect}/>
       
        
    </div>)
}

export default Navbar