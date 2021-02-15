import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Route,Switch,Link} from 'react-router-dom'
import {login} from '../actiongenerators/logActions'
import PrivateRoute from './PrivateRoute'
import Login  from './Login'
import User from './User'
import Home from './Home'
import Register from './Register'


const App =(props)=>{
    const user = useSelector(state => state.log)
    const dispatch =useDispatch()

    

    
    return (<div>
      {
          user ? (<div><Link to="/">Home</Link>|<Link to='/user'>Account</Link>|<Link to="/" onClick={()=>{
            localStorage.removeItem('login')
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

export default App

