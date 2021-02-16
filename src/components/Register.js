import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startadduser} from '../actiongenerators/logActions'
import {Button,Grid,TextField,Paper} from '@material-ui/core'
import Data from '../data.json'

const Register =(props)=>{
    const accounts =useSelector(state => state.accounts)
    console.log(accounts)

    const dispatch = useDispatch()

    

    //initialising state variable for input fields
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [name,setName]= useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

   const handleRedirect =()=>{
       props.history.push('/login')
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
    const handleName = (e)=> setName(e.target.value)
    const handleEmail = (e)=> setEmail(e.target.value)
    const handlePassword =(e)=> setPassword(e.target.value)


   const  handleSubmit=(e)=>{
    e.preventDefault()
    runValidations()
    if(Object.keys(errors).length === 0) {
        setFormErrors({})
        const formData={
            name:name,
            email : email,
        password : password
        }
        dispatch(startadduser(formData,handleRedirect))
        Data.push(formData)
        console.log(Data)
        
    }else {
        console.log('form errors', errors)
        setFormErrors(errors)
    }
    }

    return (<div className="loginBox">
        <div className="card">
        <h2>Register with us</h2>
        <form onSubmit={handleSubmit} >
            <TextField label="Enter your Name" variant="outlined" type="text" value={name} placeholder="Enter your name" onChange={handleName} />{formErrors.name && <span>{ formErrors.email }</span>} <br/><br/>
            <TextField label="Enter your email" variant="outlined" type="text" value={email} placeholder="Enter your email" onChange={handleEmail} />{formErrors.email && <span>{ formErrors.email }</span>} <br/><br/>
            <TextField label="Enter your password" variant="outlined" type="password" value={password} placeholder="Enter your email" onChange={handlePassword} />{formErrors.password && <span>{ formErrors.password }</span>}<br/><br/>
            <input type="submit" className="btn btn-primary " />
        </form>
    </div>
    </div>)
}

export default Register