import React from 'react'
import {useSelector} from 'react-redux' 

const Home =(props)=>{
    const users = useSelector(state => state.accounts)

    // console.log(users)

    return (<div>
        <h3 style={{textAlign :'center'}}>Home Page</h3>
        <marquee behavior="alternate"style={{heigth : '60px'}}>Sample work</marquee>
        
    </div>)
}

export default Home