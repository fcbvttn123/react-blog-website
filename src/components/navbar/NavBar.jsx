import { LoginButton } from "./LoginButton";
import { AppContext, BLOGS_CONTAINER } from "../../App";
import { useContext } from "react";
import {CreatePostButton} from "./CreatePostButton"
import {SignOutButton} from "./SignOutButton"

export function NavBar() {
    let {isSignedIn, setCurrentMainSection} = useContext(AppContext)
    return (
        <div>
            <button onClick={() => setCurrentMainSection(BLOGS_CONTAINER)}>Home</button>
            {!isSignedIn && <LoginButton />}
            {isSignedIn && <CreatePostButton />}
            {isSignedIn && <SignOutButton />}
        </div>
    )
}