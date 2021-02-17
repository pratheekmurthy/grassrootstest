import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {Button,Grid,TextField,Paper} from '@material-ui/core'
import {login,startadduser} from '../actiongenerators/logActions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import {LockOutlinedIcon} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'


const Login =(props)=>{
    const [accounts,setAccounts] = useState([])
    const isLogin = useSelector(state => state.log)
    const dispatch = useDispatch()

    let history = useHistory()

    
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
    },[]) 

    // dispatch

    
        


    //initialising state variable for input fields
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    
   
    const checkUser =(data)=>{
        const result = accounts.filter((user)=>{
            return user.email === data.email
        })

        if(result[0]?.password === data.password){
            localStorage.setItem('token',result[0].id)
           dispatch(startadduser(result[0])) 
           dispatch(login())
            
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


    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              pratheek@gmail.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          height: '100vh',
        },
        image: {
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        paper: {
          margin: theme.spacing(8, 4),
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

      const classes = useStyles();


    
    return ( <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleEmail}
            autoComplete="email"
            autoFocus
          />{formErrors.email && <span>{ formErrors.email }</span>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password} placeholder="Enter your email" onChange={handlePassword}
            autoComplete="current-password"
          />{formErrors.password && <span>{ formErrors.password }</span>}<br/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>)
}

export default Login