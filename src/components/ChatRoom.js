import { signOut } from "firebase/auth"

function ChatRoom(props) {
    const signOutEvent = () => {
        signOut(props.auth)
            .then(() => console.log('logged out'))
            .catch(err => console.log(err))
    }

    return (
        <div className="chat__room">
            <nav>
                <h2>Chat Room</h2>
                <button onClick={() => signOutEvent()}>Sign out</button>
            </nav>

            <div className="chat__box">
                <div className="inputs">
                    <input type="text"></input>
                    <button>🤙</button>
                </div>
            </div>

        </div>
    )
}

export default ChatRoom