import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/register')
    }
  return (
    <div>
      <h1>Register your name</h1>
      <button onClick={handleClick}>Register</button>
    </div>
  )
}

export default Home
