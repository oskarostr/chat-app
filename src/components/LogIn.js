import { useSignInWithGoogle } from "react-firebase-hooks/auth"

function LogIn(props) {
    const [signInWithGoogle] = useSignInWithGoogle(props.auth)

    return (
        <div className="log-in">
            <button onClick={() => signInWithGoogle()}>Sign in</button>
        </div>
    )
}

export default LogIn