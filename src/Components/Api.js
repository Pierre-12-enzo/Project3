import React, { useEffect, useState } from 'react';

const Api = () => {
  // Step 1: Define state to hold API data and loading status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Initially loading is true

  // Step 2: Define the useEffect hook to fetch data
  useEffect(() => {
    // Fetch data inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);  // Save data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);  // Set loading to false after data is fetched
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once

  // Step 3: Conditional rendering based on loading status
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
