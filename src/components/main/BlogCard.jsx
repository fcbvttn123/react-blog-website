export function BlogCard(props) {
    return (
        <div>
            <h1>{props.blog.title}</h1>
            <p>{props.blog.post}</p>
            <p>@{props.blog.writer}</p>
        </div>
    )
}