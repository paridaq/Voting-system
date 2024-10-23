import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const Login = () => {
  const[email,setemail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password})
      if(res && res.data.success){
        toast(res.data.message)
        navigate(location.state?.from || '/account', { state: { email } });
      }
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
<input type="text"
value={email}
onChange={(e)=>setemail(e.target.value)}
required />

         <input type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         required
          />
          <button type='submit'>Login</button>
      </form>
        
      
    </div>
  )
}

export default Login
