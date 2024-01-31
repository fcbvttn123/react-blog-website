import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase"

export function BlogCard(props) {
    let blogWriterEmail = props.blog.email
    let currentlyLoggedInEmail = props.currentlyLoggedInEmail
    let blogId = props.blog.id

    async function deleteBlog(id) {
        const docRef = doc(db, "blogs", id)
        await deleteDoc(docRef)
        props.renderBlogContainer()
    }

    return (
        <div>
            <button onClick={() => deleteBlog(blogId)} className={blogWriterEmail == currentlyLoggedInEmail ? "w-7" : "w-7 hidden"}>
                <img className="w-full h-full object-cover" src="./bin.png" alt="" srcSet="" />
            </button>
            <h1>{props.blog.title}</h1>
            <p>{props.blog.post}</p>
            <p>@{props.blog.writer}</p>
        </div>
    )
}