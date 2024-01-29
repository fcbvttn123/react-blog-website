import { useState } from "react"
import { doc, addDoc } from "firebase/firestore"
import { blogs } from "../../firebase"
import { localStorageKey } from "../../App"

export function PostForm() {
    const [formData, setFormData] = useState({
        title: "", 
        post: ""
    })
    let currentlyLoggedInEmail = JSON.parse(localStorage.getItem(localStorageKey)).email
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
        savePostToDB(formData.title.replace(/\n/g, ''), formData.post.replace(/\n/g, ''))
    }
    async function savePostToDB(title, post) {
        await addDoc(blogs, {
            title, 
            post,
            writer: currentlyLoggedInEmail,
            createdAt: Date.now()
        })
        setFormData({
            title: "", 
            post: ""
        })
    }
    return (
        <form action="#" onSubmit={formSubmission} className="bg-black">
            <div>
                <label className="text-white" htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={formChangeEvent}/>
            </div>
            <div className="flex mt-5">
                <label className="text-white" htmlFor="post">Post:</label>
                <textarea name="post" id="post" cols="30" rows="10" value={formData.post} onChange={formChangeEvent}></textarea>
            </div>
            <button className="text-white">Submit</button>
        </form>
    )
}