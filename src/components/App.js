import React,{StrictMode, useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Route,Switch,Link} from 'react-router-dom'
import {login,startadduser} from '../actiongenerators/logActions'
import PrivateRoute from './PrivateRoute'
import Login  from './Login'
import User from './User'
import Home from './Home'
import Register from './Register'



const App =(props)=>{
    const [users,setUsers]= useState([])
    const [user,setUser] = useState(false)
    // const user = useSelector(state => state.log)
    const dispatch =useDispatch()

    
    

    useEffect(()=>{
      if(localStorage.getItem('user')){
        // dispatch(login())
        const val=localStorage.getItem('user', JSON.stringify('id'))
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
            setUsers(myJson)
          });
          // console.log(val,"val")
          // console.log(users,"users")
          if(val && users){
            dispatch(startadduser(val,users))
          }
          
        setUser(true)
      }
    
    
    },[users],[user])

    
  

    
    return (<div>
      {
          user  ? (<div><Link to="/">Home</Link>|<Link to='/user'>Account</Link>|<Link to="/" onClick={()=>{
            localStorage.removeItem('user') 
            window.location.reload()
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

