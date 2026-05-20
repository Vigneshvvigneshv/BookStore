import About from './pages/About.jsx'
import './index.css'


import Header from './components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import FAQs from './pages/FAQs.jsx';
import { Cart } from './pages/Cart.jsx';
import BookDetail from './pages/BookDetail.jsx';


function App() {
  return ( 
    <>
   
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Search' element={<Search/>}></Route>
    <Route path='/BookDetail/:id'element={<BookDetail/>}></Route>
    <Route path='/FAQs' element={<FAQs/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
   </Routes>
   
   </>
  );
}


export default App



