import { useState, useEffect } from "react"

interface IJoke {
  id: number
  type: string
  setup: string
  punchline: string
}

const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>(() => {
    const storedJokes = localStorage.getItem("savedJokes")
    return storedJokes ? JSON.parse(storedJokes) : []
  })

  useEffect(() => {
    localStorage.setItem("savedJokes", JSON.stringify(savedJokes))
  }, [savedJokes])

  const saveJoke = (joke: IJoke) => {
    setSavedJokes((prevJokes) => [...prevJokes, joke])
  };

  return { savedJokes, saveJoke }
}

export default useJokes
