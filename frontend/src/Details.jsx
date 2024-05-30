import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {
  const navigate = useNavigate()
  const params = useParams();
  const [data, setData] = useState();
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch(
        `http://localhost:3000/detail/${params.id}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      const smth = await response.json();
      setData(smth);
    } else {
      const response = await fetch(`http://localhost:3000/detail/${params.id}`);
      const smth = await response.json();
      setData(smth);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = async()=>{
    try {
      const response = await fetch(`http://localhost:3000/delete/${params.id}`,
    {
      method:"DELETE",
    }
    )
    
    if(!response.ok){
      const message = await response.json()
      alert(message.msg)
    }if(response.ok){
      const message = await response.json()
      alert(message.msg)
      navigate("/")
    }
    } catch (error) {
      
    }
  }
  if (!data) {
    return <h1>loading...</h1>;
  }
  if (data.show) {
    return (
      <div style={{ marginTop: "40px", marginBottom: "20px" }}>
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginTop: "20px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{data.header}</h1>
            <img
              src={data.image}
              alt="image"
              style={{ height: "300px", width: "500px" }}
            />
            {data.show && <Link to={`/edit/${data.id}`}>edit</Link>}
            {data.show && <button onClick={deleteItem}>delete</button>}
            <h4>@{data.owner.username}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginTop: "40px", marginBottom: "20px" }}>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{data.header}</h1>
          <img
            src={data.image}
            alt="image"
            style={{ height: "300px", width: "500px" }}
          />
          <h4>@{data.owner.username}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
