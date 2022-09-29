function ChatMsg(props) {
    console.log(props)
            
    return (
        <div className="message">
            <img src={props.message.photoUrl}></img>
            <h1>{props.message.text}</h1>
        </div>
    )
}

export default ChatMsg