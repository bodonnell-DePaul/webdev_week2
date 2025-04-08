import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState<string | null>(null);

  // Effect 1: Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []); // Runs once on mount

  // Effect 2: Fetch data when the component mounts
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []); // Runs once on mount

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Current Time: {time.toLocaleTimeString()}</p>
      <p>Data: {data || 'Loading...'}</p>
    </div>
  );
};

export default Dashboard;