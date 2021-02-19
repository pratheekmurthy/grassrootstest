import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './components/app.css'
import {login,startadduser} from './actiongenerators/logActions'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import history from './components/history'



const store = configureStore()

if(localStorage.getItem('token')){
   store.dispatch(startadduser(localStorage.getItem('token')))
   store.dispatch(login())
}

const ele =(
            <Provider store={store}>
               <BrowserRouter history={history}>
             <App />
             </BrowserRouter>
             </Provider>
   )


ReactDOM.render(ele,document.getElementById("root"));



