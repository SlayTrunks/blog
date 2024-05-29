import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Navbar from './Navbar.jsx'
import {Link , NavLink} from "react-router-dom"
import Profile from "./Profile.jsx"
import Create from './Create.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <div>
 
  <BrowserRouter>
 
 <Routes>
  <Route path="/" element={<App/>}  />
  <Route path="/login" element={<Login/>}  />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/create" element={<Create/>} />
 </Routes>
 </BrowserRouter>
  </div>
)
