import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Navbar} from './Component/Navbar/Index';
import { Home } from './Pages/Home/Index';
function App() {
  return (
    <>
     
     <Routes>
     <Route path='/' element={<><Navbar /><Home /></>} />
     </Routes>
    </>
  );
}

export default App;
