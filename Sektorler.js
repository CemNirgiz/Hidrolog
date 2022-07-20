import React, { useState, useCallback }from 'react'
import ImageViewer from 'react-simple-image-viewer';
import im1 from '../Image/Ismakinesi/1.jpg'
import im2 from '../Image/Ismakinesi/2.jpg'
import im3 from '../Image/Ismakinesi/3.jpg'
import im4 from '../Image/Ismakinesi/4.jpg'
import im5 from '../Image/Ismakinesi/5.jpg'
import im6 from '../Image/Ismakinesi/6.jpg'
import im7 from '../Image/Ismakinesi/7.jpg'
import im8 from '../Image/Ismakinesi/8.jpg'
import im9 from '../Image/Ismakinesi/9.jpg'
import im10 from '../Image/Ismakinesi/10.jpg'
import im11 from '../Image/Ismakinesi/11.jpg'
import im12 from '../Image/Ismakinesi/12.jpg'
import kf1 from '../Image/Kagitfabrikasi/1.jpg'
import kf2 from '../Image/Kagitfabrikasi/2.jpg'
import tm1 from '../Image/Tarimmakinesi/1.jpg'
import tm2 from '../Image/Tarimmakinesi/2.jpg'
import tm3 from '../Image/Tarimmakinesi/3.jpg'
import tm4 from '../Image/Tarimmakinesi/4.jpg'
import tm5 from '../Image/Tarimmakinesi/5.jpg'
import s1 from '../Image/Sehir/s1.jpg'
import s2 from '../Image/Sehir/s2.jpg'
import s3 from '../Image/Sehir/s3.jpg'
import e1 from '../Image/Enerji/e1.jpg'
import e2 from '../Image/Enerji/e2.jpg'
import e3 from '../Image/Enerji/e3.jpg'
import d1 from '../Image/Demir/d1.jpg'
import d2 from '../Image/Demir/d2.jpg'
import d3 from '../Image/Demir/d3.jpg'





function Sektorler() {
    
    const [currentImage1, setCurrentImage1] = useState(0);
    const [isViewerOpen1, setIsViewerOpen1] = useState(false);
    const images1 = [
     im1
     ,im2
     ,im3
     ,im4
     ,im5
     ,im6
     ,im7
     ,im8
     ,im9
     ,im10
     ,im11
     ,im12
    ];
  
  
    const openImageViewer1 = useCallback((index) => {
      setCurrentImage1(index);
      setIsViewerOpen1(true);
    }, []);
  
    const closeImageViewer1 = () => {
      setCurrentImage1(0);
      setIsViewerOpen1(false);
    };

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
   
    const images2 = [
        kf1,kf2
       ];
  
    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
    const [currentImage2, setCurrentImage2] = useState(0);
    const [isViewerOpen2, setIsViewerOpen2] = useState(false);
   
   
    const images3 = [
        tm1,tm2,tm3,tm4,tm5
       ];
  
    const openImageViewer2 = useCallback((index) => {
      setCurrentImage2(index);
      setIsViewerOpen2(true);
    }, []);
  
    const closeImageViewer2 = () => {
      setCurrentImage2(0);
      setIsViewerOpen2(false);
    };
    const [currentImage3, setCurrentImage3] = useState(0);
    const [isViewerOpen3, setIsViewerOpen3] = useState(false);
   
   
    const images4 = [
        s1,s2,s3
       ];
  
    const openImageViewer3 = useCallback((index) => {
      setCurrentImage3(index);
      setIsViewerOpen3(true);
    }, []);
  
    const closeImageViewer3 = () => {
      setCurrentImage3(0);
      setIsViewerOpen3(false);
    };
    const [currentImage4, setCurrentImage4] = useState(0);
    const [isViewerOpen4, setIsViewerOpen4] = useState(false);
   
   
    const images5 = [
        e1,e2,e3
       ];
  
    const openImageViewer4 = useCallback((index) => {
      setCurrentImage4(index);
      setIsViewerOpen4(true);
    }, []);
  
    const closeImageViewer4 = () => {
      setCurrentImage4(0);
      setIsViewerOpen4(false);
    };
    const [currentImage5, setCurrentImage5] = useState(0);
    const [isViewerOpen5, setIsViewerOpen5] = useState(false);
   
   
    const images6 = [
        d1,d2,d3
       ];
  
    const openImageViewer5 = useCallback((index) => {
      setCurrentImage5(index);
      setIsViewerOpen5(true);
    }, []);
  
    const closeImageViewer5 = () => {
      setCurrentImage5(0);
      setIsViewerOpen5(false);
    };
    



  return (
    <>
    <div className='container mb-5'>
        <h2 className='mt-8 text-center text-danger'>MOBIL HIDROLIK</h2>
        <h3 id='ismakinalari' className='mt-5 text-center text-warn'>Iş Makinaları</h3>
        <div className='row '>
        {images1.map((src, index) => (
            <div className='col-lg-2 col-4 col-md-3 ' key={index} >
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer1(index) }
            width="100%"
            height='100'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen1 && (
            <ImageViewer
            src={ images1 }
            currentIndex={ currentImage1 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer1 }  
            />
        
        )}
       
        <h3 id='tarimmakinalari' className='mt-5 text-center text-warn'>Tarim Makinaları</h3>
        <div className='row '>
        {images3.map((src, index) => (
            <div className='col-lg-2 col-4 col-md-3' key={index}>
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer2(index) }
            width="100%"
            height='100'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen2 && (
            <ImageViewer
            src={ images3 }
            currentIndex={ currentImage2 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer2 }  
           
            />
        
        )}  
        <h3 id='tarimmakinalari' className='mt-5 text-center text-warn'>Şehir Makinaları</h3>
        <div className='row '>
        {images4.map((src, index) => (
            <div className='col-lg-2 col-4 col-md-3' key={index}>
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer3(index) }
            width="100%"
            height='100'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen3 && (
            <ImageViewer
            src={ images4 }
            currentIndex={ currentImage3 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer3 }  
           
            />
        
        )}  





        <h2 className='mt-8 text-center text-danger'>ENDUSTRIYEL HIDROLIK</h2>
        <h3 className='mt-5 text-center text-warn'>Kağıt Fabrikaları</h3>
        <div className='row'>
        {images2.map((src, index) => (
            <div className='col-lg-2 col-4 col-md-3' key={index}>
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer(index) }
            width="100%"
            height='100'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen && (
            <ImageViewer
            src={ images2 }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }  
            />
        
        )}  
         <h3 className='mt-5 text-center text-warn'>Enerji Fabrikaları</h3>
        <div className='row'>
        {images5.map((src, index) => (
            <div className='col-lg-2 col-4 col-md-3' key={index}>
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer4(index) }
            width="100%"
            height='100'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen4 && (
            <ImageViewer
            src={ images5 }
            currentIndex={ currentImage4 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer4 }  
            />
        
        )}  
         <h3 className='mt-5 text-center text-warn'>Demir-Çelik Fabrikaları</h3>
        <div className='row'>
        {images6.map((src, index) => (
            <div className='col-lg-2 col-4 col-md-3' key={index}>
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer5(index) }
            width="100%"
            height='100'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen5 && (
            <ImageViewer
            src={ images6 }
            currentIndex={ currentImage5 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer5 }  
            />
        
        )}  
    </div>
    </>
    
  )
 
}


export default Sektorler