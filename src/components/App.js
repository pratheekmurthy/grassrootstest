import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Navbar from './NavBar'
import Login from './Login'
import Home from './Home'
import User from './User'
import Register from './Register'
import PrivateRoute from './PrivateRoute'
import { useSelector } from 'react-redux'
import Header from './header'

const App = (props) => {
  const isLogin = useSelector(state => state.log)

  const handleRedirect = () => {
    props.history.push('/user')
  }

  return (<div >
    {
      isLogin ? (<div>
        <Header handleRedirect={handleRedirect} />
      </div>) : (<div><Login /></div>)
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

