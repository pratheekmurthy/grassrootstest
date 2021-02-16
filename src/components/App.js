import React,{StrictMode, useEffect} from 'react'
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

    console.log(user)
    const getData=()=>{
      fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
        });
    }
    useEffect(()=>{
      getData()
    },[])

    // fetch("../data.json")
    //     .then(function(resp){
    //       console.log('resp', JSON.stringify(resp) )
    //       return resp.json()
    //     })
    //     .then(function(data){
    //       console.log(data)
    //     })

    useEffect(()=>{
      if(localStorage.getItem('login')){
        dispatch(login())
      }
    },[dispatch])
    

    
    return (<div>
      {
          user === true ? (<div><Link to="/">Home</Link>|<Link to='/user'>Account</Link>|<Link to="/" onClick={()=>{
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

