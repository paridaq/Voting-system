import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Account = () => {
  const location = useLocation()
  const {email} = location.state 
  const [user,setUser] = useState({name:'',email:''})
  const [newname,setNewname] = useState('')
  useEffect(()=>{
    const fetchUserDetails = async()=>{
      try {
        const res = await axios.get(`http://localhost:8080/api/v1/auth/account/${email}`)
        setUser(res.data.user)
      } catch (error) {
           console.log(error)
           toast.error('failed to fetch details')
        
      }
    }
    fetchUserDetails();
  },[email])

const handleUpdateName = async()=>{
  try {
    const res = await axios.put('http://localhost:8080/api/v1/auth/account/update-name',{email,newname})
    setUser(res.data.user)
    toast.success(res.data.message)
  } catch (error) {
    toast.error('failed to update name')
  }
}

  return (
    <div className="account">
    <h2>Account Details</h2>
    <div className="card">
      <h3>Name: {user.name}</h3>
      <h4>Email: {user.email}</h4>
    </div>
    <input
        type="text"
        value={newname}
        onChange={(e) => setNewname(e.target.value)}
        placeholder="Update your name"
      />
      <button onClick={handleUpdateName}>Update Name</button>
    
   
  </div>
  
  )
}

export default Account
