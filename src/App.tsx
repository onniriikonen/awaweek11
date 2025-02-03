// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import FrontPage from "./components/FrontPage"
import SavedPage from "./components/SavedPage"
import useJokes from "./hooks/useJokes"


function App() {
  const { saveJoke } = useJokes()
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage saveJoke={saveJoke} />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
