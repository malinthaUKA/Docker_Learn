import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  const [users, setUsers] = useState([]);

  // Fetch users from the API
  useEffect(() => {
    axios.get('http://localhost:5000/api/users').then(response => {
      setUsers(response.data.data);
    }).catch(error => {
      console.error('Error fetching users:', error);
    });
  }, []);

  return (
    <>
      <div className="App">
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App


// mehidee use effect bawitha karanne axios eka parak run wela etanin nawatinna, 
// hetuwak mekay,  
// mulinma hitamu useeffect ekak na kiyala,  axios eken data aragena setuser() run wenawa, React updates the users state.
// React says: “State has changed, I need to re-render the component.” The function App() runs again from the top.ewita ayeth 
// axios run wenawa, ewita ayeth setUsers() run wenawa, 
// Another setUsers(...) → another render → another axios.get(...) → another setUsers(...) → ...

// dan hitmu useeffect ekak tiyenwa kiyala, The axios.get(...) only runs once, after the first render. 
// Even if setUsers(...) causes a re-render, useEffect won’t run again because of the empty dependency array []. (setusers() 
// eka aye run unath usereffet() eka run wenne na mokada [] yodala tyenwa nisa usereffect() ekata)

// pahatha thiyenne useEffect(() wala another use case ekak
// Run Code When a Specific State Changes 
// const [searchQuery, setSearchQuery] = useState('');

// useEffect(() => {
//   console.log('Searching for:', searchQuery);
// }, [searchQuery]);
// 🔹 Runs every time searchQuery changes
// 🔹 Used for filtering/searching, calling APIs with updated input, or reacting to form changes.