import React, { useState,useMemo } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        localStorage.setItem("token",stuffs.token)
        navigate("/");
      }
    } catch (error) {
      alert("Error while fetching try again");
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
     <form onSubmit={handleClick}>
    <input
      type="text"
      onChange={handleChange}
      name="username"
      value={data.username}
      placeholder="username"
    />
    <input
      type="text"
      onChange={handleChange}
      name="password"
      value={data.password}
      placeholder="password"
    />
    <button type="submit">login</button>
  </form>
     
    </div>
  );
};


export default Login;
