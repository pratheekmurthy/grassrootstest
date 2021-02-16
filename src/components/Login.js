import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {login,startadduser} from '../actiongenerators/logActions'
import {Button,Grid,TextField,Paper} from '@material-ui/core'


const Login =(props)=>{
   const [accounts,setAccounts] = useState([])
    
   
    const dispatch = useDispatch()
    useEffect(()=>{
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
            setAccounts(myJson)
          });
    },[dispatch])
        


    //initialising state variable for input fields
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    
   
    const checkUser =(data)=>{
        
        const result = accounts.filter((ele)=>{
            return  ele.email === data.email
        })

        if(result[0]?.password === data.password){
            localStorage.setItem('user',result[0].id)
            dispatch(startadduser(result[0]))
            props.history.push('/')
            window.location.reload()
        }
        

    }
    //Validation function for input fields
    const runValidations =()=>{
        if(email.trim().length === 0){
            errors.email= "Email cannot be blank"
        }
        if(password.trim().length === 0){
            errors.password = "Password cannot be blank"
        }
    }
    
    //handleChange functions for input fields
    const handleEmail = (e)=> setEmail(e.target.value)
    const handlePassword =(e)=> setPassword(e.target.value)


   const  handleSubmit=(e)=>{
    
    e.preventDefault()
    runValidations()
    if(Object.keys(errors).length === 0) {
        setFormErrors({})
        const formData={
            email : email,
        password : password
        }
        
        checkUser(formData)
        
    }else {
        console.log('form errors', errors)
        setFormErrors(errors)
    }
    }
    
    return (<div className="loginBox">
    <div className="card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
            <TextField label="Enter your email" variant="outlined" type="text" value={email} placeholder="Enter your email" onChange={handleEmail} />{formErrors.email && <span>{ formErrors.email }</span>} <br/><br/>
            <TextField label="Enter your password" variant="outlined" type="password" value={password} placeholder="Enter your email" onChange={handlePassword} />{formErrors.password && <span>{ formErrors.password }</span>}<br/><br/>
            <input type="submit" className="btn btn-primary " />
        </form>
    </div>
    </div>)
}

export default Login