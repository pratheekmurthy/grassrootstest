import React from 'react'
import {useSelector} from 'react-redux' 

const Home =(props)=>{
    const users = useSelector(state => state.accounts)

    // console.log(users)

    return (<div>
        <h1>Home Page</h1>
        
    </div>)
}

export default Home