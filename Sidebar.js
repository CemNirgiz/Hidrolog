import {React,  useState }  from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../Image/logo.png'


function Sidebar() {
  
const [open , setOpen ] = useState(false)
  




  return (
    <>
    <nav className="  bg-white"  >
                <div className='container '>
                    <button className="btn mt-2" type="button" onClick={()=> setOpen(!open)} ><FontAwesomeIcon icon={faBars} size='2x' /></button>
                   {open && <div className= ' ' >
                        <div className="offcanvas-header ">
                            <Link   to='/' className="navbar-brand" onClick={()=> setOpen(false)}><img src={logo} alt='logo' style={{height:'60px'}} ></img></Link>
                            <button id='closeButton' onClick={()=> setOpen(false)} type="button" className="btn-close text-reset" ></button>
                        </div>
                        <div className="offcanvas-body text-center">
                        <ul className="navbar-nav ">
                        <li className="nav-item  mx-2">
                            <Link  to='/' className= "nav-link text-nav w-75 mx-auto my-3" onClick={()=> setOpen(false)} >
                             Anasayfa
                            </Link>
                       
                        </li>
                        <li className="nav-item  mx-2 ">
                            <Link  to='/Hakkimizda' className="nav-link  text-nav w-75 mx-auto my-3" onClick={()=> setOpen(false)} >
                                Hakkımızda
                            </Link>
                          
                        </li>
                        <li className="nav-item  mx-2">
                            <Link  to='/Markalar' className="nav-link  text-nav w-75 mx-auto my-3" onClick={()=> setOpen(false)} >
                            Markalar
                            </Link>
                        
                        </li>
                        <li className="nav-item  mx-2">
                            <Link  to='/Sektorler' className="nav-link  text-nav w-75 mx-auto my-3" onClick={()=>setOpen(false)} >
                            Sektörler
                            </Link>
                           
                        </li>
                        <li className="nav-item mx-2">
                            <Link  to='/Urunler' className="nav-link  text-nav w-75 mx-auto my-3" onClick={()=>setOpen(false)} >
                            Ürünler
                            </Link>
                        </li>
                        <li className="nav-item  mx-2">
                            <Link  to='/Iletisim' className="nav-link  text-nav w-75 mx-auto my-3" onClick={()=>setOpen(false)} >
                            Iletişim
                            </Link>
                        </li>
                </ul>
                        </div>
                    </div>}
                </div>
    </nav>
    
    
    
    
    
    
    </>
  )
}

export default Sidebar