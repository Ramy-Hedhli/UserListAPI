import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NavUser } from './components/Navbar';
import { ListUsers } from './components/ListUsers';
import { UserProfile } from './components/User';

function App() {
  return (
    <div>
      <NavUser/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Profiles' element={<ListUsers/>}/>
        <Route path='/Profiles/:id' element={<UserProfile/>}/>
      </Routes>

    </div>
  );
}

export default App;
