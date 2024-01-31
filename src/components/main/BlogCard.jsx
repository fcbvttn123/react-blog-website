export function BlogCard(props) {
    let blogWriterEmail = props.blog.email
    let currentlyLoggedInEmail = props.currentlyLoggedInEmail
    return (
        <div>
            <button className={blogWriterEmail == currentlyLoggedInEmail ? "w-7" : "w-7 hidden"}>
                <img className="w-full h-full object-cover" src="./bin.png" alt="" srcSet="" />
            </button>
            <h1>{props.blog.title}</h1>
            <p>{props.blog.post}</p>
            <p>@{props.blog.writer}</p>
        </div>
    )
}