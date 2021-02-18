
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useSelector,useDispatch} from 'react-redux'
import {startadduser} from '../actiongenerators/logActions'
// import {Button,Grid,TextField,Paper} from '@material-ui/core'
import Data from '../data.json'
import Header from './HomeHeader'
import {useHistory} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        grassroots
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory

  const accounts =useSelector(state => state.accounts)
    const dispatch = useDispatch()

    //initialising state variable for input fields
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [name,setName]= useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

   const handleRedirect =()=>{
       history.push('/login')
   }

    //Validation function for input fields
    const runValidations =()=>{
        if(email.trim().length === 0){
            errors.email= "Email cannot be blank"
        }
        if(password.trim().length === 0){
            errors.password = "Password cannot be blank"
        }
        if(name.trim().length === 0){
            errors.name ="User name cannot be blank"
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
        // Data.push(formData)
        console.log(Data)
        
    }else {
        console.log('form errors', errors)
        setFormErrors(errors)
    }
    }

  return (<div>
      <Header/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User name"
            name="email"
            autoComplete="email"
            autoFocus
            value={name}
            onChange={handleName}
          />{formErrors.name && <span>{ formErrors.name }</span>} <br/>
           
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Enter your email"
            type="email"
            id="email"
            value={email} 
            autoComplete="email"
            autoFocus
            onChange={handleEmail}
          /> {formErrors.email && <span>{ formErrors.email }</span>} <br/>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter your password"
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            autoComplete="current-password"
          /> {formErrors.password && <span>{ formErrors.password }</span>}<br/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </div>);
}