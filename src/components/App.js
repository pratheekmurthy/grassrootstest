import React,{useEffect} from 'react'
import { Link, Switch, Route,Redirect,useHistory } from 'react-router-dom'
import Navbar from './NavBar'
import Login from './Login'
import Dashboard from './Dashboard'
import User from './User'
import Register from './Register1'
import PrivateRoute from './PrivateRoute'
import { useSelector,useDispatch } from 'react-redux'
import Header from './sidebar1'
import Home from './Home'
import {login ,startadduser } from '../actiongenerators/logActions'

const App = (props) => {
  const isLogin = useSelector(state => state.log)

  let history =useHistory();


  return (<div >
    {
      isLogin ? (<div>
        {history.push('/dashboard')}
      </div>) : (<div>{history.push("/")}</div>)
    }
    

    <Switch>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/Dashboard' component={Dashboard} exact={true} />
      <Route path='/login' component={Login} exact={true} />
      <Route path='/register' component={Register} exact={true} />
      <PrivateRoute path="/user" component={User} exact={true} />
    </Switch>

  </div>)
}

export default App

