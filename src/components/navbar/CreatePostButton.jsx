import { useContext } from "react"
import { AppContext } from "../../App"

export function CreatePostButton() {
    const {setCurrentMainSection} = useContext(AppContext)
    return (
        <button onClick={() => setCurrentMainSection("postForm")}>Create Post</button>
    )
}