
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
import Anasayfa from './Pages/Anasayfa';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Hakkimizda from './Pages/Hakkimizda';
import Markalar from './Pages/Markalar';
import Sektorler from './Pages/Sektorler';
import Urunler from './Pages/Urunler';
import Iletisim from './Pages/Iletisim';


function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  },

 []);


  return (
  <>
    <Router>
    
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Anasayfa/>}/>
      <Route path='/Hakkimizda' exact element={<Hakkimizda/>}/>
      <Route path='/Markalar' exact element={<Markalar/>}/>
      <Route path='/Sektorler' exact element={<Sektorler/>}/>
      <Route path='/Urunler' exact element={<Urunler/>}/>
      <Route path='/Iletisim' exact element={<Iletisim/>}/>
    </Routes>
    <Footer/>
  </Router>
  
  
  
  </>
  );
}

export default App;
