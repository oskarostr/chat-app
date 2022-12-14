import React from "react";
import './styles.scss'

import ChatRoom from "./components/ChatRoom";
import LogIn from "./components/LogIn";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {

  const app = initializeApp({
      apiKey: 'AIzaSyDndr8JeXhBvUyTO1OtlVNt9EcXpvZJ400',
      authDomain: "chat-app-380b7.firebaseapp.com",
      projectId: "chat-app-380b7",
      storageBucket: "chat-app-380b7.appspot.com",
      messagingSenderId: "151506133940",
      appId: "1:151506133940:web:92e1feb552157ff94988e1"
    }
  )

  const auth = getAuth(app)
  const firestore = getFirestore(app)

  const [user] = useAuthState(auth)
  console.log(user)
  //console.log(msgs)
  
  return (
    <div className="App">
      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore} user={user} /> : <LogIn auth={auth}/>}
      </section>
    </div>
  );
}

export default App;
