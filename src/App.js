import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import './App.css'
import ChatFeed from './Component/ChatFeed'; 
import LoginForm from './Component/LoginForm';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height = '100vh'
      projectID = '266d4560-b57e-4538-a78d-2f46352385cc'
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps}/> }
    />
  )
}

export default App;