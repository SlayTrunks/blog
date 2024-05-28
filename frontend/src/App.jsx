import {Link, NavLink, } from "react-router-dom"

import './App.css'
import Navbar from "./Navbar"

function App() {
  

  return (
   <main>
   <Navbar/>

     <div className="container">
     <div className="entry">
        <img className='img' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680810580963/b66efd22-8c92-4ef9-a59b-fa25ed96778c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="image" />
        <div className='texts'>
        <h4 className="author">@diwas</h4>
        <h2>Data Race in Python despite GIL?</h2>
        <p>While the definite definition of data race differs with the concurrency model and the language, it's safe to assume that data race is when 2 or more threads try to access the same memory where at least one of them is a write operation.</p>
      </div>
        </div>
     <div className="entry">
        <img className='img' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680810580963/b66efd22-8c92-4ef9-a59b-fa25ed96778c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="image" />
        <div className='texts'>
        <h4 className="author">@diwas</h4>
        <h2>Data Race in Python despite GIL?</h2>
        <p>While the definite definition of data race differs with the concurrency model and the language, it's safe to assume that data race is when 2 or more threads try to access the same memory where at least one of them is a write operation.</p>
      </div>
        </div>
     <div className="entry">
        <img className='img' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1680810580963/b66efd22-8c92-4ef9-a59b-fa25ed96778c.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="image" />
        <div className='texts'>
          <h4 className="author">@diwas</h4>
        <h2>Data Race in Python despite GIL?</h2>
        <p>While the definite definition of data race differs with the concurrency model and the language, it's safe to assume that data race is when 2 or more threads try to access the same memory where at least one of them is a write operation.</p>
      </div>
        </div>
     </div>
   </main>
  )
}

export default App
