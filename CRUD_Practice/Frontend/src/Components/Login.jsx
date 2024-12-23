import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("hy");
    const navigate = useNavigate();

    const handler = async(e)=>{
        e.preventDefault();

     try {
           const response = await axios.post("http://localhost:4500/user/login",{
               email,
               password
           })
           localStorage.setItem("user",JSON.stringify(response.data.user))
           console.log(response.data);
           
           
           setMessage("success");
           navigate('/das')
           alert("Login Sucess")
          
     } catch (error) {
        setMessage("Error")
        
     }
    }

    
  return (
    <div className='flex w-screen h-[80vh] text-white bg-zinc-900'>
      <form onSubmit={handler} className='  text-white flex flex-col gap-3 bg-zinc-950 p-10 rounded-lg' >

        <input className='text-black' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='email' />
        <input className='text-black' value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='password' />
        <button className=' border-2 rounded-lg' type="submit">Submie</button>
        <h2 className='text-white'>{message}</h2>

      </form>
    </div>
  )
}
export default Login
