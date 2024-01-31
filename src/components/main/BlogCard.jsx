import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase"

export function BlogCard(props) {
    let blogWriterEmail = props.blog.email
    let currentlyLoggedInEmail = props.currentlyLoggedInEmail
    let blogId = props.blog.id
    let dynamicHide = blogWriterEmail == currentlyLoggedInEmail ? "w-7" : "w-7 hidden"

    async function deleteBlog(id) {
        const docRef = doc(db, "blogs", id)
        await deleteDoc(docRef)
        props.renderBlogContainer()
    }

    return (
        <div className="bg-zinc-100 mb-4 p-6 rounded-lg relative">
            <button 
                onClick={() => deleteBlog(blogId)} 
                className={`${dynamicHide} absolute top-6 right-6`}>
                    <img className="w-full h-full object-cover" src="./bin.png" alt="" srcSet="" />
            </button>
            <h1 className="text-2xl font-extrabold">{props.blog.title}</h1>
            <p className="my-4 max-h-80 overflow-auto">{props.blog.post}</p>
            <p className="font-extralight italic">@{props.blog.writer}</p>
        </div>
    )
}