import { LoginButton } from "./LoginButton";
import { AppContext } from "../../App";
import { useContext } from "react";
import {CreatePostButton} from "./CreatePostButton"
import {SignOutButton} from "./SignOutButton"

export function NavBar() {
    let {isSignedIn} = useContext(AppContext)
    return (
        <div>
            <button>Home</button>
            {!isSignedIn && <LoginButton />}
            {isSignedIn && <CreatePostButton />}
            {isSignedIn && <SignOutButton />}
        </div>
    )
}