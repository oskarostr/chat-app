import { useState } from "react"
import { signOut } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

function ChatRoom(props) {
    const [message, setMessage] = useState('')

    const signOutEvent = () => {
        signOut(props.auth)
            .then(() => console.log('logged out'))
            .catch(err => console.log(err))
    }

    async function addData() {
        await setDoc(doc(props.firestore, "messages", props.user.metadata.createdAt), {
            createdAt: props.user.metadata.creationTime,
            photoUrl: props.user.photoURL,
            text: message,
            uid: props.user.uid
        })
    }

    const updateMessage = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="chat__room">
            <nav>
                <h2>Chat Room</h2>
                <button onClick={() => signOutEvent()}>Sign out</button>
            </nav>

            <div className="chat__box">
                <div className="inputs">
                    <input type="text" onChange={(e) => updateMessage(e)}></input>
                    <button onClick={() => addData()}>🤙</button>
                </div>
            </div>

        </div>
    )
}

export default ChatRoom