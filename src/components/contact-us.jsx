import React from 'react';

import Background from "../hero_1.jpg";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ContactUs = ({value, setValue}) => (

    <>

    <div className="site-section bg-image2 overlay" style={{ backgroundImage: `url(${Background})` }}   id="contact-section" >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3 text-white">Contact Us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">

            

            <form  className="p-5 bg-white">
              
              <h2 className="h4 text-black mb-5">Contact Us</h2> 

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control rounded-0" />
                </div>
                <div className="col-md-6">
                  <label className="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
                
                <div className="col-md-12">
                  <label className="text-black" for="email">Email</label> 
                  <input type="email" id="email" className="form-control rounded-0" />
                </div>
              </div>

              <div className="row form-group">
              <div className="col-md-12">
                  <label className="text-black" for="">Contact No.</label> 
                  <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}/>
                </div>                
              

              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary mr-2 mb-2" />
                </div>
              </div>

  
            </form>
          </div>
        
        </div>
        
      </div>
      </div>
      <div className="footer py-5 text-center">
  <div className="container">
    <div className="row mb-5">
      <div className="col-12">
        <p className="mb-0">
          <a href="#" className="p-3"><span className="icon-facebook"></span></a>
          <a href="#" className="p-3"><span className="icon-twitter"></span></a>
          <a href="#" className="p-3"><span className="icon-instagram"></span></a>
          <a href="#" className="p-3"><span className="icon-linkedin"></span></a>
          <a href="#" className="p-3"><span className="icon-pinterest"></span></a>
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
       
      </div>
    </div>
  </div>
</div>  

</>

);

export default ContactUs; 