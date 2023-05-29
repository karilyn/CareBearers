import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Users from './components/Users';
import Kids from './components/Kids';


function App() {
  const [users, setUsers] = useState([]);
  const [kids, setKids] = useState([]);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      axios.get('http://localhost:3000/api/users'),
      axios.get('http://localhost:3000/api/kids')
    ])
    .then((items) => {
      if(mounted) {
        setUsers(items[0].data);
        setKids(items[1].data);
      }
    });
    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <Users users={users} />
      <Kids kids={kids} />
    </div>
  );
}

export default App;
