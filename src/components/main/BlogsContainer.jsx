import { getDocs } from "firebase/firestore"
import { blogs } from "../../firebase"
import { useEffect, useState } from "react"
import { BlogCard } from "./BlogCard"
import { localStorageKey } from "../../App"

export function BlogsContainer() {
    let [retrievedBlogs, setRetrievedBlogs] = useState([])

    let loginInfo = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : null
    retrievedBlogs.sort((a, b) => b.createdAt - a.createdAt);

    async function getBlogs() {
        const data = await getDocs(blogs)
        setRetrievedBlogs(data.docs.map(doc => {
            return {
                ...doc.data(), 
                id: doc.id
            }
        }))
    }

    let blogCards = retrievedBlogs.map(blog => <BlogCard key={blog.id} renderBlogContainer={getBlogs} blog={blog} currentlyLoggedInEmail={loginInfo ? loginInfo.email : null}/>)

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div>
            {blogCards}
        </div>
    )
}