import React, { useState, useCallback }from 'react'
import ImageViewer from 'react-simple-image-viewer';
import f7 from '../Image/Filtre/7.jpg'
import f9 from '../Image/Filtre/9.jpeg'
import f12 from '../Image/Filtre/12.jpg'
import f14 from '../Image/Filtre/14.jpeg'
import f17 from '../Image/Filtre/17.jpeg'
import f18 from '../Image/Filtre/18.jpeg'
import f1 from '../Image/Filtre2/1.jpeg'
import f2 from '../Image/Filtre2/2.jpeg'
import f3 from '../Image/Filtre2/3.jpeg'
import f4 from '../Image/Filtre2/4.jpeg'
import v2 from '../Image/Valf/2.jpeg'
import v3 from '../Image/Valf/3.jpeg'
import v4 from '../Image/Valf/4.jpeg'
import v5 from '../Image/Valf/5.jpeg'
import v6 from '../Image/Valf/6.jpeg'
import v7 from '../Image/Valf/7.jpeg'
import v1 from '../Image/Valf/1.jpeg'
import p1 from '../Image/Pompa/1.jpeg'
import a1 from '../Image/Aktuator/2.jpeg'
import o1 from '../Image/Olcum/1.jpeg'
import o2 from '../Image/Olcum/2.jpeg'
import o3 from '../Image/Olcum/3.jpeg'
import o4 from '../Image/Olcum/4.jpeg'
import o5 from '../Image/Olcum/5.jpeg'






function Urunler() {
    
    const [currentImage1, setCurrentImage1] = useState(0);
    const [isViewerOpen1, setIsViewerOpen1] = useState(false);
    const images1 = [
        f7,
        f9,
        f12,
        f14,
        f17,
        f18
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
      f1,f2,f3,f4
      
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
       v1,v2,v3,v4,v5,v6,v7
       ];
  
    const openImageViewer2 = useCallback((index) => {
      setCurrentImage2(index);
      setIsViewerOpen2(true);
    }, []);
  
    const closeImageViewer2 = () => {
      setCurrentImage2(0);
      setIsViewerOpen2(false);
    };
    const [currentImage4, setCurrentImage4] = useState(0);
    const [isViewerOpen4, setIsViewerOpen4] = useState(false);
    const images4 = [
       p1
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
    const images5 = [
       a1
       ];
  
    const openImageViewer5 = useCallback((index) => {
      setCurrentImage5(index);
      setIsViewerOpen5(true);
    }, []);
  
    const closeImageViewer5 = () => {
      setCurrentImage5(0);
      setIsViewerOpen5(false);
    };
    const [currentImage6, setCurrentImage6] = useState(0);
    const [isViewerOpen6, setIsViewerOpen6] = useState(false);
    const images6 = [
       o1,o2,o3,o4,o5
       ];
  
    const openImageViewer6 = useCallback((index) => {
      setCurrentImage6(index);
      setIsViewerOpen6(true);
    }, []);
  
    const closeImageViewer6 = () => {
      setCurrentImage6(0);
      setIsViewerOpen6(false);
    };
    
    



  return (
    <>
    <div className='container my-5'>
        <h2 className='text-center text-warn mt-8' >Filtre Elemanları</h2>
        <div className='row '>
        {images1.map((src, index) => (
            <div className='col-lg-3 col-6 col-md-3 ' key={index}>
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer1(index) }
            width="80%"
            height='150'
            key={ index }
            style={{ margin: ''}}
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
        <h2 className='mt-5 text-center text-warn'>Filtreler</h2>
        <div className='row'>
        {images2.map((src, index) => (
            <div className='col-lg-3 col-6 col-md-3' key={index} >
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer(index) }
            width="100%"
            height='150'
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
        <h2 className='mt-5 text-center text-warn'>Valfler</h2>
        <div className='row '>
        {images3.map((src, index) => (
            <div className='col-lg-3 col-6 col-md-3' key={index} >
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer2(index) }
            width="100%"
            height='150'
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
        <h2 className='mt-5 text-center text-warn'>Pompalar</h2>
        <div className='row '>
        {images4.map((src, index) => (
            <div className='col-lg-3 col-6 col-md-3' key={index} >
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer4(index) }
            width="100%"
            height='150'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen4 && (
            <ImageViewer
            src={ images4 }
            currentIndex={ currentImage4 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer4 }  
           
            />
        
        )}    
        <h2 className='mt-5 text-center text-warn'>Aktüatörler</h2>
        <div className='row '>
        {images5.map((src, index) => (
            <div className='col-lg-3 col-6 col-md-3' key={index} >
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer5(index) }
            width="100%"
            height='150'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen5 && (
            <ImageViewer
            src={ images5 }
            currentIndex={ currentImage5 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer5 }  
           
            />
        
        )}    
        <h2 className='mt-5 text-center text-warn'>Ölçüm Cihazları</h2>
        <div className='row '>
        {images6.map((src, index) => (
            <div className='col-lg-3 col-6 col-md-3' key={index} >
            <img
            src={ src }
            className='mt-5'
            onClick={ () => openImageViewer6(index) }
            width="100%"
            height='150'
            key={ index }
            style={{ margin: '5px', marginTop:'10px'}}
            alt=""
            />
            </div>
        ))} 
        </div>
        {isViewerOpen6 && (
            <ImageViewer
            src={ images6 }
            currentIndex={ currentImage6 }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer6 }  
           
            />
        
        )}    
    </div>
    </>
    
  )
 
}


export default Urunler