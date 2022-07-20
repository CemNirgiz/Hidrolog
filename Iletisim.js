import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Component/Form'


function Iletisim() {
  

  
  return (
    <>
     <section id="home-info-pic" style={{height:'500px'}}>
            <div>
                <div className="container py-5 ">
                </div>
            </div>    
        </section>  
      <div className='container mb-5'>
        <h2 className='text-center mb-5 mt-5 text-warn'>Bize Ulaşın</h2>
        <div className='my-5'>
        <Form/>
        </div>
        <div className='row  p-3 bg-warn fs-4'>     
            <div className='col-lg-6 my-auto text-center'>
              <div className=''>
              <p className=''> Telefon:&nbsp;<a href='tel:+902163411000' className='text-decoration-none text-dark'><span className='fw-bold'> 0 216 341 10 00</span></a></p>
              <p> Gsm:&nbsp;<a href='tel:+905437230236' className='text-decoration-none text-dark'><span className='fw-bold'> 0 543 723 02 36</span></a></p>
             </div>
            </div>
            <div className='col-lg-6 my-auto text-center '>
              <div className=''>
            <Link to='/Iletisim' className='text-decoration-none'
                      onClick={() => window.location = 'mailto:info@hidrolog.com.tr'}>
                      <p className='text-dark'>Mail:<span className='fw-bold'>&nbsp;info@hidrolog.com.tr </span></p>
              </Link>
              <Link to='/Iletisim' className='text-decoration-none'
                      onClick={() => window.location = 'mailto:satıs@hidrologmakina.com'}>
                      <p className='text-dark'>Mail:<span className='fw-bold'>&nbsp;satıs@hidrologmakina.com </span></p>
              </Link>
      
              </div>
            </div>
        </div>
       
      </div>
  
    </>
  )
}

export default Iletisim