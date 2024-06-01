import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.msg);
        alert(`Error: ${errorData.msg}`);
        return;
      }

      const responseData = await response.json();
     
      alert(`Success: ${responseData.msg}`);
      navigate("/login");
    } catch (error) {
      console.log("Fetch error:", error);
      alert(`Fetch error: ${error.message}`);
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
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;
