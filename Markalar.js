import React from 'react'
import wg from '../Image/Markalar/wg.png'
import cat from '../Image/Markalar/cat.png'
import jcb from '../Image/Markalar/jcb.jpeg'
import cnh from '../Image/Markalar/cnh.jpeg'
import agco from '../Image/Markalar/agco.jpeg'
import ammann from '../Image/Markalar/ammann.png'
import carraro from '../Image/Markalar/carraro.jpeg'
import claas from '../Image/Markalar/claas.jpeg'
import danfoss from '../Image/Markalar/danfoss.jpeg'
import dmg from '../Image/Markalar/dmg.jpeg'
import doosan from '../Image/Markalar/doosan.jpeg'
import epiroc from '../Image/Markalar/epiroc.png'
import fayat from '../Image/Markalar/fayat.png'
import haulotte from '../Image/Markalar/haulotte.png'
import hysteryale from '../Image/Markalar/hysteryale.jpeg'
import jlg from '../Image/Markalar/jlg.jpeg'
import kion from '../Image/Markalar/kion.jpeg'
import kirchoff from '../Image/Markalar/kirchoff.jpeg'
import konecranes from '../Image/Markalar/konecranes.jpeg'
import krauss from '../Image/Markalar/krauss.png'
import liebherr from '../Image/Markalar/liebherr.png'
import manitou from '../Image/Markalar/manitou.svg'
import mecalac from '../Image/Markalar/mecalac.png'
import oshkosh from '../Image/Markalar/oshkosh.jpeg'
import samedeutz from '../Image/Markalar/samedeutz.png'
import sandvik from '../Image/Markalar/sandvik.png'
import skyjack from '../Image/Markalar/skyjack.png'
import terex from '../Image/Markalar/terex.jpeg'
import zf from '../Image/Markalar/zf.jpeg'
import toyota from '../Image/Markalar/toyota.jpeg'
// import marka from '../Image/markalar.jpg'


function Markalar() {
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
          img: toyota 
        },
        {
          key:'4',
          img: agco 
        },
        {
          key:'5',
          img: ammann 
        },
        {
          key:'6',
          img: carraro 
        },
        {
          key:'7',
          img: claas 
        },
        {
          key:'8',
          img: cnh 
        },
        {
          key:'9',
          img: danfoss 
        },
        {
          key:'10',
          img: dmg 
        },
        {
          key:'11',
          img: doosan 
        },
        {
          key:'12',
          img: epiroc 
        },
        {
          key:'13',
          img: fayat 
        },
        {
          key:'14',
          img: haulotte 
        },
        {
          key:'15',
          img: hysteryale 
        },
        {
          key:'16',
          img: jlg 
        },
        {
          key:'17',
          img: kion
        },
        {
          key:'18',
          img: kirchoff 
        },
        {
          key:'19',
          img: konecranes 
        },
        {
          key:'20',
          img: krauss 
        },
        {
          key:'21',
          img: liebherr 
        },
        {
          key:'22',
          img: manitou 
        },
        {
          key:'23',
          img: mecalac 
        },
        {
          key:'24',
          img:  oshkosh
        },
        {
          key:'25',
          img:  samedeutz
        },
        {
          key:'26',
          img:  sandvik
        },
        {
          key:'27',
          img:  skyjack
        },
        {
          key:'28',
          img:  terex
        },
        {
          key:'29',
          img:  zf
        }
      ]
  return (
    <>
    <div className='bg-light pb-5'>
    <div className='container '>\
    <h2 className='mt-8 text-center text-warn mb-5'>Markalar</h2>
    {/* <div className='d-flex justify-content-center my-3'>    
        <img src={marka} className='img-fluid ' style={{height:'400px',width:'800px'}}/>
    </div> */}
    <div className="row">
   
        {markalar.map((item)=>{
        return(                    
        <div className="col-lg-2 col-md-2 col-6" key={item.key}>
          <div className="card my-3 border-0" >
            <img src={item.img} className="card-img mx-auto img-fluid" alt={item.img} style={{height:'150px',width:'150px'}} />
          </div>
        </div>
         )
        })}
        
        </div>




    </div>
    </div>
    </>
  )
}

export default Markalar