import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { blogs } from "../../firebase"
import { localStorageKey } from "../../App"
import { Button } from "../Button"

export function PostForm() {
    const [formData, setFormData] = useState({
        title: "", 
        post: ""
    })
    let currentlyAccountDisplayName = JSON.parse(localStorage.getItem(localStorageKey)).username
    let currentlyAccountEmailAddress = JSON.parse(localStorage.getItem(localStorageKey)).email
    function formChangeEvent(e) {
        let {value, name} = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function formSubmission(e) {
        e.preventDefault()
        if (formData.title == "" || formData.post == "") return
        savePostToDB(
            formData.title.replace(/\n/g, ''), 
            formData.post.replace(/\n/g, ''), 
            currentlyAccountDisplayName, 
            currentlyAccountEmailAddress
        )
    }
    async function savePostToDB(title, post, writerName, writerEmail) {
        await addDoc(blogs, {
            title, 
            post,
            writer: writerName,
            createdAt: Date.now(),
            email: writerEmail
        })
        setFormData({
            title: "", 
            post: ""
        })
    }
    return (
        <div>
            <form action="#" onSubmit={formSubmission} className="bg-black mt-8 w-11/12 mx-auto max-w-2xl p-6 rounded-xl">
                <h1 className="text-white font-extrabold text-3xl text-center mb-4">Create a Post</h1>
                <div className="flex flex-col items-start">
                    <label className="text-white" htmlFor="title">Title:</label>
                    <input className="px-2 py-1 rounded-md w-full mt-2" placeholder="Enter your post title" type="text" name="title" id="title" value={formData.title} onChange={formChangeEvent}/>
                </div>
                <div className="flex my-5 flex-col items-start">
                    <label className="text-white" htmlFor="post">Post:</label>
                    <textarea className="rounded-md w-full mt-2 px-2 py-1" placeholder="Post..." name="post" id="post" cols="30" rows="10" value={formData.post} onChange={formChangeEvent}></textarea>
                </div>
                <Button>
                    Add Post
                </Button>
            </form>
        </div>
    )
}