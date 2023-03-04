import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import BookingPage from './Pages/BookingPage';
import OrderOnline from './Pages/OrderOnline';
import Menu from './Pages/Menu';
import About from './Pages/About'




function App() {

  

  return (
    <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  {/* <Route path="/reservation" element={<BookingPage/>}/> */}
 <Route path="/reservation" element={<BookingPage/>}/>
  <Route path ="/orderonline" element={<OrderOnline/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/about" element={<About/>}/>

</Routes>
<Footer/>

 </>
  );
}

export default App;
