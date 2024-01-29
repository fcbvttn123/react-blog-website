import { useState, createContext } from 'react'
import './App.css'
import { NavBar } from './components/navbar/NavBar'
import { PostForm } from './components/main/PostForm'
import { BlogsContainer } from './components/main/BlogsContainer'

export const AppContext = createContext()
export let localStorageKey = "blog-website-currentlySignedIn-info"

export const BLOGS_CONTAINER = "blogsContainer"

function App() {
  const [isSignedIn, setIsSignedIn] = useState(JSON.parse(localStorage.getItem(localStorageKey)))
  const [currentMainSection, setCurrentMainSection] = useState(BLOGS_CONTAINER)
  return (
    <AppContext.Provider value={{setIsSignedIn, isSignedIn, setCurrentMainSection}}>
      <NavBar />
      {
        currentMainSection == BLOGS_CONTAINER || !isSignedIn ? 
        <BlogsContainer /> :
        <PostForm /> 
      }
    </AppContext.Provider>
  )
}

export default App
