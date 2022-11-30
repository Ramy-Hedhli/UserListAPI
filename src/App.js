import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NavUser } from './components/Navbar';
import { ListUsers } from './components/ListUsers';
import { UserProfile } from './components/User';
import { useState } from 'react';
import { Private } from './components/PrivateRoute';

function App() {
  const [auth,setAuth]=useState(false)
  return (
    
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Profiles' element={<Private auth={auth}><ListUsers/></Private>}/>
        <Route path='/Profiles/:id' element={<Private auth={auth}><UserProfile/></Private>}/>
      </Routes>

    </div>
  );
}

export default App;
