import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

const User =(props)=>{
    const accounts =useSelector(state => state.accounts)
    const dispatch = useDispatch()

    console.log(accounts.length)

    const email = localStorage.getItem('login')
    
    if(email){
        const result = accounts.filter((user)=>{
            console.log(user,'each')
            return user.email === email
        })
        
    }

    return (<div>
        <h2>Admin page</h2>
    </div>)
}

export default User