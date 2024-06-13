import logo from './assets/logo.svg';
import './App.css';
import  star from './assets/Star.svg'
import { motion } from "framer-motion"
import Team from './components/Team';
import Hero from './components/Hero';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <section className="hero" >
        <Hero />
      </section>
      
      
      <Team/>

     

      <section className="contact" id='contactid'>

      <Contact/>
      </section>
    
    </div>
  );
}

export default App;