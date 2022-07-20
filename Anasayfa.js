import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sl3 from '../Image/sl3.jpg'
import sl2 from '../Image/sl2.jpg'
import sl4 from '../Image/sl4.jpg'
import sl5 from '../Image/sl5.jpg'
import sl6 from '../Image/sl6.jpg'
import slider2 from '../Image/slider2.jpg'
import sl1 from '../Image/sl1.jpg'
import Form from '../Component/Form'
import wg from '../Image/Markalar/wg.png'
import cat from '../Image/Markalar/cat.png'
import jcb from '../Image/Markalar/jcb.jpeg'
import fayat from '../Image/Markalar/fayat.png'
import List from './List'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,

  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    showDots: false,
  },
};

function Anasayfa() {
  const markalar = [
    {
      key:'0',
      img: wg 
    },
    {
      key:'1',
      img: cat 
    },
    {
      key:'2',
      img: jcb 
    },
    {
      key:'3',
      img: fayat 
    },
  ]

  return (
    <>
      <section id="slider" className="mt-8">
        <Carousel infinite responsive={responsive}  autoPlay={true}  autoPlaySpeed={5000}>
     
            <div>
              <img src={sl1} className="d-block w-100 img-fluid sl" style={{maxHeight:'650px', minHeight:'284px'}}  alt="..."/>
              <div className="carousel-caption bg-slider ">
                <h2 className="fs-1 ">Iş Makinaları Yedek Parçaları</h2>
                <Link to='/Urunler' className="btn btn-warning  me-3 mt-2">Ürünler</Link>
                <Link to='/Iletisim' className="btn btn-outline-warning mt-2 ">Iletişim</Link>
              </div>
            </div>
            <div>
              <img src={slider2} className="d-block w-100 img-fluid sl" style={{maxHeight:'650px', minHeight:'284px'}}  alt="..."/>
              <div className="carousel-caption  bg-slider">
                <h2 className="fs-1 ">Kağıt Makinaları Yedek Parçaları</h2>
                <Link to='/Urunler' className="btn btn-warning  me-3 mt-2">Ürünler</Link>
                <Link to='/Iletisim' className="btn btn-outline-warning mt-2">Iletişim</Link>
              </div>
              </div>
            <div>
              <img src={sl3} className="d-block w-100 img-fluid sl" style={{maxHeight:'650px', minHeight:'284px'}}  alt="..."/>
              <div className="carousel-caption  bg-slider ">
                <h2 className="fs-1 ">Demir Çelik Fabrikaları  Yedek Parçaları</h2>
                <Link to='/Urunler' className="btn btn-warning  me-3 mt-2">Ürünler</Link>
                <Link to='/Iletisim' className="btn btn-outline-warning mt-2">Iletişim</Link>
              </div>
              </div>
            <div>
              <img src={sl4} className="d-block w-100 img-fluid sl" style={{maxHeight:'650px', minHeight:'284px'}}  alt="..."/>
              <div className="carousel-caption  bg-slider ">
                <h2 className="fs-1 ">Enerji Fabrikaları Yedek Parçaları</h2>
                <Link to='/Urunler' className="btn btn-warning  me-3 mt-2">Ürünler</Link>
                <Link to='/Iletisim' className="btn btn-outline-warning mt-2">Iletişim</Link>
              </div>
            </div>
            <div>
              <img src={sl5} className="d-block w-100 img-fluid sl" style={{maxHeight:'650px', minHeight:'284px'}}  alt="..."/>
              <div className="carousel-caption bg-slider">
                <h2 className="fs-1 ">Beton Mikserleri Yedek Parçaları</h2>
                <Link to='/Urunler' className="btn btn-warning  me-3 mt-2">Ürünler</Link>
                <Link to='/Iletisim' className="btn btn-outline-warning mt-2">Iletişim</Link>
              </div>
            </div>
            <div>
              <img src={sl6} className="d-block w-100 img-fluid sl " style={{maxHeight:'650px', minHeight:'284px'}}  alt="..."/>
              <div className="carousel-caption bg-slider ">
                <h2 className="fs-1 ">Belediye Araçları Yedek Parçaları</h2>
                <Link to='/Urunler' className="btn btn-warning  me-3 mt-2">Ürünler</Link>
                <Link to='/Iletisim' className="btn btn-outline-warning mt-2">Iletişim</Link>
              </div>
            </div>
          
         
          
        
        </Carousel>
        <section id="markalar" className="">
        <div className="container mt-5">
        <h3 className="text-center fs-1 text-dark">Markalar</h3>
        <div className="row">
        {markalar.map((item)=>{
        return(                    
        <div className="col-lg-3 col-md-3" key={item.key}>
          <div className="card my-3 border-0" >
            <img src={item.img} className="card-img mx-auto img-fluid" alt={item.img} style={{height:'250px',width:'250px'}} />
          </div>
        </div>
         )
        })}
        <Link to='/Markalar' className="text-center my-3 text-decoration-none "><span className="text-sp text-warn fs-4">Tüm Markalar Için Tiklayiniz..</span></Link>
        </div>
        </div>
      </section>
      </section>
      <section id="home-info-pic">
            <div>
                <div className="container py-5 ">
                </div>
            </div>    
      </section>  
      <section id="form" className="mb-2 ">
      <h3 className='py-4 text-center'>Bizimle İletişime Geçin</h3>
      <Form/>
      </section>
      <section className="text-white" style={{fontSize:'0.02px'}}>
        <List/>
      </section>
      </>
  )
}

     
     
   

export default Anasayfa