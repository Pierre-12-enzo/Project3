import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import State1 from './Components/State';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import User from './Users/User';
import Profile from './Users/Profile';
import Account from './Users/Account';
import Api from './Components/Api';
import { Ref1 } from './Components/Ref1';
import OnSubmit from './Components/Events/OnSubmit';
import Bubble from './Components/Events/Bubble';
import DynamicList from './Components/Events/DynamicList';
import Student from './Components/Students/Student';
function App() {
  return (
   <>
    
  <Router>
   <Navbar />
    <Routes>
      <Route path="/" element={<State1 />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/account' element={<Account/>} />
      <Route path='/Api' element={<Api/>} />
      <Route path='/ref' element={<Ref1/>} />
      <Route path='/onSubmit' element={<OnSubmit/>} />
    </Routes>
    <Bubble />
    <DynamicList/>
    <Student />
  </Router>
   </>
  );
}

export default App;
