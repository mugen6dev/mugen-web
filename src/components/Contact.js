import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.svg';
import star from '../assets/Star.svg';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import hand1 from '../assets/hand1.png';
import hand2 from '../assets/hand2.png';


const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4keyv4j', 'template_84tkbnb', form.current, {
        publicKey: 'RaBhnaa18d1AUxm0G',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


    return ( 
        <div className="container1">
            
            <div className='content1'>
                <h2>REACH US</h2>
            </div>
        
        <form className="my-form"  ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="user_name" placeholder="Write your name here" />
                    
                </div>

                <div class="form-group">
                    <label>Email:</label>
                    <input type="text" name="user_email" placeholder="Write your email here"/>
                    
                </div>
                <div class="form-group">
                    <label>Message:</label>
                    <textarea name="message" placeholder="Write your message here"></textarea>
                </div>    
                <input class="button" type="submit" value="Submit"
                name=""></input>
        </form>

        <div className='stars'>
        <motion.img id='star11' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star12' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star13' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star14' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />


        <motion.img id='star15' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star16' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

      </div>

        </div>
        
     );
}
 
export default Contact;

