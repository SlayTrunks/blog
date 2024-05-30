import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    header: "",
   
    description: "",
    image:""
  });
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3000/postblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
       
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const stuffs = await response.json();
        alert(stuffs.msg);
        return;
      }
      if (response.ok) {
        const stuffs = await response.json();
        
        alert(stuffs.msg);
        navigate("/")
        
      }
    } catch (error) {
      alert("Error while fetching try again");
      console.log(error);
    }
  };
  const handleChange = (e)=>{
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
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
  );
};

export default Create;
