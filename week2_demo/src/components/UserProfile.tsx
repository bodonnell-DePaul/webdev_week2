import React, { useState, useEffect } from 'react';

const UserProfile: React.FC = () => {
  const [name, setName] = useState('John Doe'); // State for name
  const [age, setAge] = useState(30); // State for age
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status


  useEffect(() => {
    setName('Hello' + {name});
    setAge(age+1)

  }, [isLoggedIn]); // Runs once on mount

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

export default UserProfile;