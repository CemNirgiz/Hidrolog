import React, { useRef,useState }  from 'react'
import {faUser, faEnvelope , faPhone, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

function Form() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_drt0bbx', 'template_mpfitgp', form.current, 'EEaNG9-5ZjmfSvpXQ')
      .then((result) => {
          console.log(result.text);
         
          
      }, (error) => {
          console.log(error.text);
          
      });
      e.target.reset();
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
  };

    
  
  return (
    <>
        <section id='main-form'>
            <div className='' id='contact'>
                <section id='contact' className='container'>
                    <form method='post' className='form-group' ref={form} onSubmit={sendEmail}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><FontAwesomeIcon icon={faUser}/></span>
                                    <input className='form-control'  name='name'type='text' id='name' placeholder='Adınız Soyadınız' required='required'  />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><FontAwesomeIcon icon={faEnvelope}/></span>
                                    <input className='form-control'   name='email' type='email' id='email' placeholder='Mail Adresiniz' pattern='^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$' required='required'  />
                                </div>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-md-6'>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><FontAwesomeIcon icon={faPhone}/></span>
                                    <input className='form-control'  name='phone'  type='tel' id='phone' placeholder='Telefon Numaranız' required='required' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="input-group ">
                                <span className='input-group-text'><FontAwesomeIcon icon={faHouse}/></span>
                                <input className='form-control'  name='city'  type='text' id='city' placeholder='Şehir' required='required' />
                                </div> 
                            </div>  
                        </div>
                        <div>
                            <textarea className='form-control mt-3' name='message'  cols='40' rows='5' id='comments' placeholder='Mesajınız' spellCheck='true'></textarea>
                        </div>
                       
                        <div className=''>
                        <input type="submit"   value="Gönder" className='btn btn-warning my-4 py-2' id='submit'    />
                        </div>
 
                    </form>
                    {showSuccessMessage && (
                    <div className="alert alert-success fw-bold fs-3 text-center" role="alert">Bilgileriniz Iletildi. Tarafınıza En Yakın Sürede Dönüş Sağlanacaktır.</div>
                        )}
                </section>
            </div>
        </section>
     
    </>
  )
}

export default Form