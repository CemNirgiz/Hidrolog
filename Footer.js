import {React} from 'react'
import { Link } from 'react-router-dom';



function Footer1() {

  return (
    <>
      <section id='Footer-Bottom' className='bg-dark border-bottom border-2 pb-4 d-none d-lg-block'>
        <div className='container'>
          <div className='row ' >
            <div className='col-lg-4 text-white my-auto'>
              <ul className='list-group ' style={{listStyle:'none'}}>
                <li className="text-white" >  
                  <Link  className="list-group-item bg-dark text-white border-0 ps-0 " to='/'>Anasayfa</Link>
                </li>
                <li className="text-white" >
                  <Link  className="list-group-item bg-dark text-white border-0 ps-0 " to='/Hakkimizda'>Hakkımızda</Link>
                </li> 
                <li className="text-white " > 
                  <Link  className="list-group-item bg-dark text-white border-0 ps-0 " to="/Markalar">Markalar</Link>
                </li>
              </ul>      
            </div>
            <div className='col-lg-4 text-white my-auto'>
              <ul className='list-group' style={{listStyle:'none'}}>
                <li className="text-white" >  
                  <Link  className="list-group-item bg-dark text-white border-0 ps-0 " to='/Sektorler'>Sektörler</Link>
                </li>
                <li className="text-white" >  
                  <Link  className="list-group-item bg-dark text-white border-0 ps-0 " to='/Urunler'>Ürünler</Link>
                </li>
                <li className="text-white" >  
                  <Link  className="list-group-item bg-dark text-white border-0 ps-0 " to='/Iletisim'>Iletişim</Link>
                </li>
              </ul>      
            </div>
            <div className='col-lg-4 text-white mt-5'>
              <div className=''>
              <p className=''> Telefon:&nbsp;<a href='tel:+902163411000' className='text-decoration-none text-white'><span className='fw-bold'> 0 216 341 10 00</span></a></p>
              <p> Gsm:&nbsp;<a href='tel:+905437230236' className='text-decoration-none text-white'><span className='fw-bold'> 0 543 723 02 36</span></a></p>
                <Link to='/Iletisim' className='text-decoration-none'
                  onClick={() => window.location = 'mailto:info@hidrolog.com.tr'}>
                  <p className='text-white'>Mail:<span className='fw-bold'>&nbsp;info@hidrolog.com.tr </span></p>
                </Link>
                <Link to='/Iletisim' className='text-decoration-none'
                    onClick={() => window.location = 'mailto:satıs@hidrologmakina.com'}>
                    <p className='text-white'>Mail:<span className='fw-bold'>&nbsp;satıs@hidrologmakina.com </span></p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section id='copyright' className='bg-dark text-white'>
        <div className='container'>
        <p style={{fontSize:'0.675rem'}} className='text-center pt-4' >HIDROLOG MAKINA SAN. VE TIC. LTD ŞTI <b> Telefon :</b> 0 216 341 10 00 <b>E-Posta:</b> info@hidrolog.com.tr</p>
        <p className='text-center pb-4 mt-4 mb-0'><b>© 2022 Hidrolog Makina </b> Tüm Hakları Saklıdır.</p>
        </div>
    </section>
    </>
  )
}

export default Footer1