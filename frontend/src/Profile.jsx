import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom';
const Profile = () => {
  const [user,setUser] = useState()
  const [blog,setBlog] = useState()
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
        setBlog(data.myBlogs)
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
     <>
      <div style={{marginTop:40}}>
        <Navbar/>
    <h1>userprofile</h1>
    <h2>username:{user.username}</h2>
    <h2>password:{user.password}</h2>
    <h2>userid:{user._id}</h2>

    <Link to={'/create'}>Create Blog</Link>
  </div>
  <h1>my posts</h1>
   <div className='container'>
   {blog && (
       blog.map(item=>(
        

        <Link to={`/details/${item._id}`} className="entry" key={item._id}>
       <img
         className="img"
         src={item.image}
         alt="image"
       />
       <div className="texts">
         {/* <h4 className="author">@diwas</h4> */}
         <h2>{item.header}</h2>
         <p>
          {item.description.slice(0,300)}
         </p>
       </div>
     </Link>
       ))
    )}
   </div>
     </>
    )
}

export default Profile