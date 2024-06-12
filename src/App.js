import logo from './assets/logo.svg';
import './App.css';
import  star from './assets/Star.svg'
import { motion } from "framer-motion"
import Teams from './components/teams';
import Hero from './components/Hero';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <section className="hero" >
        <Hero />
      </section>
      
      <Teams/>

      <section className="contact" id='contactid'>
      <h1>CONTACT</h1>
      <Contact/>
      </section>
    
    </div>
  );
}

export default App;