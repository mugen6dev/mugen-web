
import logo from './assets/logo.svg';
import './App.css';
import star from './assets/Star.svg';
import { motion } from "framer-motion";
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">

      <section className="hero" >
        <Hero />
      </section>
      <section className="teams" id= "teamid">
      <h1>TEAM</h1>
      </section>
      <section className="contact" id='contactid'>
      <h1>CONTACT</h1>
      </section>
    </div>
  );
}

export default App;
