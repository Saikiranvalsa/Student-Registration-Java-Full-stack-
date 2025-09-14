
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddUser from './Users/AddUser';

function App() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async()=>{
    const result= await axios.get("http://localhost:8080/");
    setUsers(result.data);
  }
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home users={users}/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
        </Routes>
     
      </Router>
      
    </div>
  );
}

export default App;
