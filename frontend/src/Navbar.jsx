import React from 'react'
import {Link, NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const authCheck = localStorage.getItem("token")
  const navigate = useNavigate()
  const handleClick = ()=>{
    localStorage.removeItem("token")
    alert("loggedout successfully")
    navigate("/")
  }
  return (
    <header className='navbar' style={{ paddingBottom:"20px" ,borderBottom:"3px solid skyblue"}}>
    <NavLink className='logo' to={"/"}>logo</NavLink>
    <div className='sign'>
      {authCheck ? 
      <div className='sign'>
      <div className='logout' onClick={handleClick}>logout</div>
      <Link to={"/profile"}>Profile</Link>
      </div>
      :
      <>
      <NavLink to={"/login"}>login</NavLink>
      <NavLink to={"/signup"}>register</NavLink>
      </>
      }
    </div>
  </header>
  )
}

export default Navbar