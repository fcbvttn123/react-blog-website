import { useContext } from "react"
import { AppContext } from "../../App"
import { localStorageKey } from "../../App"
import { Button } from "../Button"

export function SignOutButton() {
    let {setIsSignedIn} = useContext(AppContext)
    function signOut() {
        localStorage.setItem(localStorageKey, null)
        setIsSignedIn(false)
    }
    return (
        <Button onClick={signOut}>
            Sign Out
        </Button>
    )
}