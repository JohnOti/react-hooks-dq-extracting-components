import React from "react";
import { messages, contacts } from "../data";
import Contacts from "./Contacts";
import MessageForm from "./MessageForm";
import Messages from "./Messages";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Contacts/>
      <main>
        <Messages/>
        <MessageForm/>
      </main>
    </div>
  );
}

export default App;
