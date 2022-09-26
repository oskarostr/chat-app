import React from "react";
import './styles.scss'

import ChatRoom from "./components/ChatRoom";
import LogIn from "./components/LogIn";

import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {

  const app = initializeApp({
      apiKey: "AIzaSyDndr8JeXhBvUyTO1OtlVNt9EcXpvZJ400",
      authDomain: "chat-app-380b7.firebaseapp.com",
      projectId: "chat-app-380b7",
      storageBucket: "chat-app-380b7.appspot.com",
      messagingSenderId: "151506133940",
      appId: "1:151506133940:web:92e1feb552157ff94988e1"
    }
  )

  const auth = getAuth(app)
  const db = getFirestore(app)

  const [user] = useAuthState(auth)

  async function getMessages(db) {
    const messagesCol = collection(db, 'messages')
    const messagesSnap = await getDocs(messagesCol)
    const messagesList = messagesSnap.docs.map(doc => doc.data())
    return messagesList
  }

  const msgs = getMessages(db)
  console.log(msgs)
  
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <LogIn />}
      </section>
    </div>
  );
}

export default App;
