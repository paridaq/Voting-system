import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'


const Register = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

   const handleSubmit =async(e)=>{
        e.preventDefault();
      try {
        const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name,email,password})
        if(res && res.data.success){
            toast.success(res&&res.data.message)
            navigate('/login')
        }else{
            toast.error(res.data.message)
        }
      } catch (error) {
        
        console.log(error)
        toast.error('something went wrong')
      }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
         < input 
         value={name || ''}
         onChange={(e)=>setName(e.target.value)}
         placeholder='enter your name'
         required
         type='text'/>
         <input
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         placeholder='Enter Email id'
         required
         type='text'/>
         <input
         value={password || ''}
         onChange={(e)=>setPassword(e.target.value)}
         required
         type='password'
         />
         <button type='submit'>submit</button>
            
        </form>


      
    </div>
  )
}

export default Register
