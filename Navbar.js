import {React  }  from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from '../Image/logo.png'




function Navbar() {
  
  return (
    <>
    <section id='navbar' >
      <nav className="navbar navbar-expand-lg d-none d-lg-block bg-white fixed-top">
         <div className="container">
             <Link   to='/' className="navbar-brand"><img src={logo} alt='logo' style={{height:'70px'}} ></img></Link>
             <div className='me-5 pt-2'>
             <ul className="navbar-nav ">
                     <li className="nav-item  mx-2">
                         <Link  to='/' className="nav-link p-1 text-nav">
                         Anasayfa
                         </Link>
                     </li>
                     <li className="nav-item  mx-2   ">
                         <Link  to='/Hakkimizda' className="nav-link  p-1 text-nav">
                         Hakkımızda
                         </Link>
                     </li>
                     <li className="nav-item  mx-2">
                         <Link  to='/Markalar' className="nav-link p-1 text-nav">
                         Markalar
                         </Link>
                     </li>
                     <li className="nav-item  mx-2">
                         <Link  to='/Sektorler' className="nav-link p-1 text-nav"  >
                         Sektörler
                         </Link>
                         
                     </li>
                     <li className="nav-item  mx-2">
                         <Link  to='/Urunler' className="nav-link  p-1 text-nav"  >
                         Ürünler
                         </Link>
                        
                     </li>
                     <li className="nav-item   mx-2">
                         <Link  to='/Iletisim' className="nav-link p-1 text-nav"  >
                            Iletişim
                         </Link>
                        
                     </li>
             </ul>
             </div>
         </div>
      </nav>
    </section>  
    <section id='sidebar'>
     <div className='d-block d-xl-none  d-lg-none fixed-top'>
     <Sidebar/>
     </div>
     </section>
     

    </>
  )
}

export default Navbar;

