import React from 'react'
import logo from '../assets/logo.svg';
import star from '../assets/Star.svg';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import hand from '../assets/hand.svg';

const Hero = () => {
  return (
    <div>
      <nav>
        <motion.a id='teamlink' href="#team-section"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -2000 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          TEAM</motion.a>
        <motion.a id='contactlink' href="#contactid"

          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 2000 }}
          transition={{ type: "spring", duration: 0.5 }}
        >CONTACT</motion.a>
      </nav>
      <motion.div className="content"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <img id="logo" src={logo} alt="" />

        <div className="hands">
          <motion.img animate={{ scale: [0.8, 1] , }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }} src={hand} alt="" id='hand1' />

          <div className="typed">
            <p>CRAFTING  NEXT  GENERATION  INTERFACES</p>
            <ReactTyped strings={["APP DEVELOPMENT", "WEB DEVELOPMENT", "UI DESIGN"]} typeSpeed={100} backSpeed={50} loop />
          </div>
          <motion.img animate={{ scale: [0.8, 1] , rotate: [180] }} transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }} src={hand} alt="" id='hand2' />
        </div>

      </motion.div>

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
