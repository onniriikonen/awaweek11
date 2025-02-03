// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import FrontPage from "./components/FrontPage"
import SavedPage from "./components/SavedPage"
import useJokes from "./hooks/useJokes"


function App() {
  const { savedJokes, saveJoke } = useJokes()

  const deleteJoke = (id: number) => {
    const updatedJokes = savedJokes.filter((joke) => joke.id !== id)
    localStorage.setItem("savedJokes", JSON.stringify(updatedJokes))
    window.location.reload()
  }


  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage saveJoke={saveJoke} />} />
        <Route path="/saved" element={<SavedPage savedJokes={savedJokes} deleteJoke={deleteJoke} />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
