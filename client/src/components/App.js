import "../App.css";
import WelcomeContainer from "./WelcomeContainer";
import HomeContainer from "./HomeContainer";
import NavBar from "./NavBar";

import { useState, useEffect } from "react";


function App() {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);


  function handleLogin(user) {
    setCurrentUser(user);
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  return (
    <div>
      <NavBar currentUser={currentUser} onLogout={handleLogout} />
      {currentUser ? (
        <HomeContainer currentUser={currentUser} />
      ) : (
        <WelcomeContainer
          currentUser={currentUser}
          onLogin={handleLogin}
         
        />
      )}
    </div>
  );
}

export default App;
