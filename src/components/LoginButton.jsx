// Firebase - Authentication
import {signInWithGoogle} from "../firebase"
import { useEffect, useState } from "react"

let localStorageKey = "blog-website-currentlySignedIn-info"

export function LoginButton() {
    const [signedIn, setSignedIn] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    async function login() {
        try {
            const user = await signInWithGoogle();
            setUserInfo(user);
            setSignedIn(true);
            localStorage.setItem(localStorageKey, JSON.stringify(userInfo))
        } catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        if(signedIn) {
            localStorage.setItem(localStorageKey, JSON.stringify(userInfo))
        }
    }, [signedIn])
    return (
        <button onClick={login}>Login</button>
    )
}