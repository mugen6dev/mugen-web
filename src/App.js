import logo from './assets/logo.svg';
import './App.css';
import  star from './assets/Star.svg'
import { motion } from "framer-motion"
import Teams from './components/teams';
import Hero from './components/Hero';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">

      <section className="hero" >
        <Hero />
      </section>
      
      <Teams/>

      <section className="contact" id='contactid'>

      <Contact/>
      </section>
    
    </div>
  );
}

export default App;