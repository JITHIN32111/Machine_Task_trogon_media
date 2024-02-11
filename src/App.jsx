import React from 'react'
import Home from './pages/Home'
import Userinfo from './pages/UserInfo'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/userInfo" element={<Userinfo/>} />

      </Routes>
    </div>
  )
}

export default App

