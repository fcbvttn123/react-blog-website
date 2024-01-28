import { useContext } from "react"
import { AppContext } from "../../App"
import { localStorageKey } from "../../App"

export function SignOutButton() {
    let {setIsSignedIn} = useContext(AppContext)
    function signOut() {
        localStorage.setItem(localStorageKey, null)
        setIsSignedIn(false)
    }
    return (
        <button onClick={signOut}>Sign Out</button>
    )
}