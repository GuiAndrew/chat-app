import React from 'react';
import './App.css';
import Contact from './components/Contact';

const name1 = "Anne Fran";
const name2 = "John Campos";
const name3 = "Bruce Ally";

const isOnlineOffline = true;

const avatarImg1 = "https://randomuser.me/api/portraits/women/66.jpg";
const avatarImg2 = "https://randomuser.me/api/portraits/men/66.jpg";
const avatarImg3 = "https://randomuser.me/api/portraits/men/13.jpg";

function App() {
  return (
    <div className="App">      
      <Contact
        avatar = { avatarImg1 } 
        name =  { name1 }
        isOnline = { true } 
        isOnlineStr = { isOnlineOffline ? "Online" : "Offline" }
      />
      <Contact
        avatar = { avatarImg2 } 
        name =  { name2 }
        isOnline = { false } 
        isOnlineStr = { !isOnlineOffline ? "Online" : "Offline" }
      />
      <Contact
        avatar = { avatarImg3 } 
        name =  { name3 }
        isOnline = { true } 
        isOnlineStr = { isOnlineOffline ? "Online" : "Offline" }
      />
    </div>
  );
}

export default App;
