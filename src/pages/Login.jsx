import React from 'react'
import img2 from "../assets/img2.jpg"
import { useNavigate } from "react-router-dom";
import { useCustomAuthContext } from '../context/AuthContext';

const Login = () => {
const [username, setUsername] = React.useState()
const [password, setPassword] = React.useState()
const navigate = useNavigate();
const {signIn} =useCustomAuthContext()




const handleSubmit = (e) => {
        e.preventDefault();
        signIn(username,password)
        navigate("/");
      };
  return (
    <div className="loginContainer">
    <div className='formContainer'>
      <img src={img2} alt="homeSvg"/>
      <h1><strong>{"<Emre's/>"}</strong>News</h1>
      <form className='styledForm' 
      onSubmit={handleSubmit}
      >
        <input  onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" required />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  )
}

export default Login