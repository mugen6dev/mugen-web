import React from 'react'
import logo from '../assets/logo.svg';
import star from '../assets/Star.svg';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import hand1 from '../assets/hand1.png';
import hand2 from '../assets/hand2.png';

const Hero = () => {
  return (
    <div>
            <nav>
        <a id = 'teamlink' href="#teamid">TEAM</a>
        <a id = 'contactlink' href="#contactid">CONTACT</a>
      </nav>
      <div className="content">
        <img id="logo" src={logo} alt="" />

        <div className="hands">
        <motion.img animate={{ scale: [0.8, 1] }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }} src={hand1} alt="" id='hand1' />
        <p>CRAFTING  NEXT  GENERATION  INTERFACES</p>
        <motion.img animate={{ scale: [0.8, 1] }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }} src={hand2} alt="" id='hand2' />
        </div>

        <div className="typed">
          <ReactTyped strings={["APP DEVELOPMENT", "WEB DEVELOPMENT", "UI DESIGN"]} typeSpeed={100} backSpeed={50} loop />

        </div>
      </div>

      <div className='stars'>
        <motion.img id='star1' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star2' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star3' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star4' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />


        <motion.img id='star5' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        <motion.img id='star6' src={star} alt=""
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

      </div>

    </div>
  )
}

export default Hero
