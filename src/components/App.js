import React,{useEffect} from 'react'
import { Link, Switch, Route,Redirect } from 'react-router-dom'
import Navbar from './NavBar'
import Login from './Login'
import Home from './Home'
import User from './User'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import { useSelector,useDispatch } from 'react-redux'
import Header from './sidebar1'
import {login ,startadduser } from '../actiongenerators/logActions'

const App = (props) => {
  const isLogin = useSelector(state => state.log)


  return (<div >
    {
      isLogin ? (<div>
        <Header />
      </div>) : (<div><Login/></div>)
    }

    <Switch>
      <Route path='/' component={Home} exact={true} />
      <Route path='/login' component={Login} exact={true} />
      <Route path='/register' component={Register} exact={true} />
      <PrivateRoute path="/user" component={User} exact={true} />
    </Switch>

  </div>)
}

export default App

