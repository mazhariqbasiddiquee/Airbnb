
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Authcontext from './authcontext';
import PastBooking from './PastBooking';
import Signup from './Signup';

function App() {
  return (
    <Authcontext>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/pastbooking' element={<PastBooking/>}/>
        <Route  path='/signup'  element={<Signup/>}   />
      </Routes>
    </BrowserRouter>
    </Authcontext>
   
  )
}

export default App;
