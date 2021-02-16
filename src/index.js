import React,{useEffect} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './components/app.css'
import {login} from './actiongenerators/logActions'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'


const store = configureStore()



if(true){
   localStorage.getItem('login')
   store.dispatch(login())
}


const ele =(
            <Provider store={store}>
               <BrowserRouter>
             <App />
             </BrowserRouter>
             </Provider>
   )


ReactDOM.render(ele,document.getElementById("root"));



