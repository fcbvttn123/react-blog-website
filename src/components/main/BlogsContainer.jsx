import { getDocs } from "firebase/firestore"
import { blogs } from "../../firebase"
import { useEffect, useState } from "react"
import { BlogCard } from "./BlogCard"
import { v4 } from "uuid"

export function BlogsContainer() {
    let [retrievedBlogs, setRetrievedBlogs] = useState([])
    retrievedBlogs.sort((a, b) => b.createdAt - a.createdAt);
    let blogCards = retrievedBlogs.map(blog => <BlogCard key={v4()} blog={blog}/>)
    async function getBlogs() {
        const data = await getDocs(blogs)
        setRetrievedBlogs(data.docs.map(doc => {
            return {
                ...doc.data(), 
                id: doc.id
            }
        }))
    }
    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <div>
            {blogCards}
        </div>
    )
}