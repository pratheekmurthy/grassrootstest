import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Header from './sidebar1'
import Login from './Login'
import Dashboard from './Dashboard'
import User from './User'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import {useSelector} from 'react-redux'

const Navbar =(props)=>{
    const isLogin = useSelector(state => state.log)


   
    return (<div>
        {
            isLogin ? (<Header/>):(props.history.push("/login"))
        }
        <Header/>
       
        
    </div>)
}

export default Navbar