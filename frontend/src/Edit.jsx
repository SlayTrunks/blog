import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from "./Navbar"
const Edit = () => {
    const params = useParams();
    const navigate = useNavigate()
  
    
    const [data,setData]=useState({
        header:"",
        topic:"",
        image:"",
        description:""
    })
   
     function handleChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const fetchOldBlog = async()=>{
        const response = await fetch(
            `http://localhost:3000/detail/${params.id}`);
          const smth = await response.json();
          console.log(smth);
         setData({
          header:smth.header,
          image:smth.image,
          description:smth.description
         })
    }
    useEffect(()=>{
      fetchOldBlog()
    },[])
  
  
    
    
    
   
    async function handleSubmit(e){
        e.preventDefault()
       try {
        const response = await fetch(`http://localhost:3000/editblog/${params.id}`,
        {
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)

        },

        )
        if(!response.ok){
          const message = await response.json()
        alert(message.msg)
        console.log(message.error)
        return
        }
        if(response.ok){
          const message = await response.json()
        alert(message.msg)
       navigate(`/details/${params.id}`)
        }
       } catch (error) {
        alert("error")
       }
    }
    return (
      <div style={{ marginTop: "40px", marginBottom: "20px" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          flexDirection: "column",
          width: "500px",
          gap: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            name="header"
            type="text"
            placeholder="header" 
            onChange={handleChange} value={data.header}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          />
          <input
            name="image"
            type="text"
            placeholder="image" 
            onChange={handleChange} value={data.image}
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          />
          
          <textarea placeholder="details" name="description" style={{ marginLeft: "32px" }} 
          onChange={handleChange} value={data.description} />
  
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
    )
}
export default Edit