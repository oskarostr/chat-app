import { useState } from "react"
import { signOut } from "firebase/auth"
import { doc, setDoc, collection } from "firebase/firestore"
import { nanoid } from 'nanoid'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatMsg from "./ChatMsg"

function ChatRoom(props) {
    const [message, setMessage] = useState('')

    const messagesRef = collection(props.firestore, 'messages')
    //const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(messagesRef, { idField: 'id' })

    const signOutEvent = () => {
        signOut(props.auth)
            .then(() => console.log('logged out'))
            .catch(err => console.log(err))
    }

    async function addData() {
        await setDoc(doc(props.firestore, "messages", nanoid()), {
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
                {messages && messages.map(msg => <ChatMsg key={msg.id} message={msg} user={props.user}/>)}
            </div>

            <div className="inputs">
                <input type="text" onChange={(e) => updateMessage(e)}></input>
                <button onClick={() => addData()}>🤙</button>
            </div>

        </div>
    )
}

export default ChatRoom