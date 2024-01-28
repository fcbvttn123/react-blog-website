import { useState, createContext } from 'react'
import './App.css'
import { NavBar } from './components/navbar/NavBar'

export const AppContext = createContext()
export let localStorageKey = "blog-website-currentlySignedIn-info"

function App() {
  const [isSignedIn, setIsSignedIn] = useState(JSON.parse(localStorage.getItem(localStorageKey)))
  return (
    <AppContext.Provider value={{setIsSignedIn, isSignedIn}}>
      <NavBar />
    </AppContext.Provider>
  )
}

export default App
