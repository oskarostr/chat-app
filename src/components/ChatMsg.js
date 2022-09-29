function ChatMsg(props) {
    console.log(props)

    const messageBgc = {
        backgroundColor: props.message.uid === props.user.uid ? '#47B5FF' : '#232323',
    }

    const messageLayout = {
        alignSelf: props.message.uid === props.user.uid ? 'flex-end' : 'flex-start',
        flexDirection: props.message.uid === props.user.uid ? 'row-reverse' : 'row'
    }
            
    return (
        <div className="message" style={messageLayout}>
            <img src={props.message.photoUrl}></img>
            <h1 style={messageBgc}>{props.message.text}</h1>
        </div>
    )
}

export default ChatMsg