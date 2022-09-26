import React from "react";
import './styles.scss'

import ChatRoom from "./components/ChatRoom";
import LogIn from "./components/LogIn";

import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {

  initializeApp({
      apiKey: "AIzaSyDndr8JeXhBvUyTO1OtlVNt9EcXpvZJ400",
      authDomain: "chat-app-380b7.firebaseapp.com",
      projectId: "chat-app-380b7",
      storageBucket: "chat-app-380b7.appspot.com",
      messagingSenderId: "151506133940",
      appId: "1:151506133940:web:92e1feb552157ff94988e1"
    }
  )

  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const [user] = useAuthState(auth)
  
  return (
    <div className="App">
      <section>
        {auth ? <ChatRoom /> : <LogIn />}
      </section>
    </div>
  );
}

export default App;
