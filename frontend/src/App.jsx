import { Link, NavLink } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";


function App() {
  const [data,setData] = useState()
  const fetchData = () => {
    useEffect(() => {
      fetch("http://localhost:3000/getblog")
        .then((response) => response.json())
        .then((data) => setData(data))
       
    }, []);
   console.log(data)
  };
  fetchData()

  if(!data){
    return <h1>loading...</h1>
  }
  return(
    <main>
      <Navbar/>
      <div className="container">
      {
        data && data.map((item)=>{
         const {_id,image,header,description} = item
         return  <Link to={`details/${item._id}`} className="entry" key={item._id}>
         <img
           className="img"
           src={item.image}
           alt="image"
         />
         <div className="texts">
           {/* <h4 className="author">@diwas</h4> */}
           <h2>{item.header}</h2>
           <p>
            {description.slice(0,300)}
           </p>
         </div>
       </Link>
        })
      }
      </div>
    </main>
  )
 
  }
  


export default App;
