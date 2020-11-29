import React, { useState, useEffect } from 'react';
import Sitebar from './Home/Navbar' //importing our new component from Navbar.js
import Auth from './auth/Auth'
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  useEffect(() => {
    if (localStorage.getItem('tokan')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear(); //we are clearing our token from our local storage. 
    setSessionToken(''); //we are resetting the state of our sessionToken to an empty string
  } //basically we'll determine if a user is logged in, based on whether or not sessionToken exists in their local storage. 

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>) //this ternary expression checks to see if our sessionToken state variable matches the token property in localStorage. If the two match (which can only happen when they store the same sessionToken string) then the func fires off the WorkoutIndex component. 
  }

  return (
    <div>
      <Sitebar clickLogout={clearToken} />
      {protectedViews()} 
    </div>
  );
}
//we're calling the protectedViews function above, not referencing it. Whenver App.js has a state change and it reloads to the DOM, our protectedViews function should fire. 
export default App;
