
import logo from './assets/logo.svg'
import './App.css';
import  star from './assets/Star.svg'
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <nav>
        <a href="">TEAM</a>
        <a href="">CONTACT</a>
      </nav>
      <section className="hero" >
        

        <div className="content">
        <img id= "logo" src={logo} alt="" />
        <p>CRAFTING NEXT GENERATION INTERFACES</p>
        <h1>APP DEVELOPMENT</h1>
        </div>

        <div className='stars'>
        <motion.img  id='star1' src={star} alt="" 
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{repeat : Infinity , duration :1  ,repeatType: "mirror"}}/>
        <motion.img  id='star2' src={star} alt="" 
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{repeat : Infinity , duration :1  ,repeatType: "mirror"}}/>
        <motion.img  id='star3' src={star} alt="" 
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{repeat : Infinity , duration :1  ,repeatType: "mirror"}}/>
        <motion.img  id='star4' src={star} alt="" 
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{repeat : Infinity , duration :1  ,repeatType: "mirror"}}/>

        </div>


      </section>
      <h1>teams</h1>
      <section className="teams">
      </section>
      <section className="contact">
        <h1>contact</h1>
      </section>
    </div>
  );
}

export default App;
