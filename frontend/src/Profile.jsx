import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
const Profile = () => {
  const [user,setUser] = useState()
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });

      if (!response.ok) {
        const data = await response.json();
        alert("Error: " + data.msg);
      } if(response.ok) {
        const data = await response.json();
        await setUser(data.msg)
        console.log(data.msg);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if(!user){
   return <h1>loading....</h1>

  }
  return(
      <div style={{marginTop:40}}>
        <Navbar/>
    <h1>userprofile</h1>
    <h2>username:{user.username}</h2>
    <h2>password:{user.password}</h2>
    <h2>userid:{user._id}</h2>
  </div>
    )
}

export default Profile