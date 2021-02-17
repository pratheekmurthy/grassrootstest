import React,{useState,useEffect} from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Login from './Login'
import Home from './Home'
import User from './User'
import Register from './Register'
import {login} from '../actiongenerators/logActions'
import PrivateRoute from './PrivateRoute'

const Navbar =(props)=>{
    const [token,setToken] = useState(false)
    const isLogin = useSelector(state => state.log)

    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(true)
        }
    },[token])
    

    return (<div>
        {
           isLogin ? (<div><Link to="/">Home</Link>|<Link to='/user'>Account</Link>|<Link to="/" onClick={()=>{
                localStorage.removeItem('token')
                dispatch(login())
           }}>logout</Link></div>):(<div><Link to="/">Home</Link> | <Link to="/login">Login</Link>| <Link to="/register">Register</Link></div>)
        }

        <Switch>
            <Route path='/' component={Home}exact= {true} />
            <Route path='/login' component={Login} exact={true}/>
            <Route path='/register'  component={Register} exact={true}/>
            <PrivateRoute path="/user"  component={User} exact={true}/>    
        </Switch>
         
    </div>)

}

export default Navbar