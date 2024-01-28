import {signInWithGoogle} from "../../firebase"
import { useContext } from "react"
import { AppContext } from "../../App"
import { localStorageKey } from "../../App"

export function LoginButton() {
    let {setIsSignedIn} = useContext(AppContext)
    async function login() {
        try {
            const user = await signInWithGoogle();
            localStorage.setItem(localStorageKey, JSON.stringify(user))
            setIsSignedIn(true)
        } catch (err) {
            alert(err);
        }
    }
    return (
        <button onClick={login}>Login</button>
    )
}