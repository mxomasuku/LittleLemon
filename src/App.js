import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import OrderOnline from './Pages/OrderOnline';
import Reservation from './Pages/Reservation';
import Menu from './Pages/Menu';
import Login from './Pages/Login';

function App() {
  return (
    <>
   <Header/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/menu" element={<Menu/>}/>
   <Route path="/orderonline" element={<OrderOnline/>}/>
   <Route path="/reservation" element={<Reservation/>}/>
   <Route path="/Login" element={<Login/>}/>
</Routes>
<Footer/>

 </>
  );
}

export default App;
