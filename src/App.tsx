// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import FrontPage from "./components/FrontPage"
import Saved from "./components/Saved"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
