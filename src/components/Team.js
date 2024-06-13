import { motion } from "framer-motion";
import star from '../assets/Star.svg';
import './Team.css'

const StarBackground = () => {
    return (
        <div id="star-bg-team-section">

            <motion.img src={star} alt="" style={{width: 20, height: 24, left: '80vw', top: '15vh', position: 'absolute', transform: 'rotate(-104.54deg)', transformOrigin: '0 0'}}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

            <motion.img src={star} alt="" style={{width: 20, height: 24, left: '60vw', top: '5vh', position: 'absolute'}}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

            <motion.img src={star} alt="" style={{width: 20, height: 24, left: '70vw', top: '35vh', position: 'absolute'}}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

            <motion.img src={star} alt="" style={{width: 20, height: 24, left: '8vw', top: '45vh', position: 'absolute'}}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />


            <motion.img src={star} alt="" style={{width: 20, height: 24, left: '30vw', top: '20vh', position: 'absolute'}}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

            <motion.img src={star} alt="" style={{width: 20, height: 24, left: '90vw', top: '65vh', position: 'absolute'}}
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }} />

        </div>
    )
}

const Team = () => {
    return (
        <section id='team-section'>
        
            <StarBackground/>

            <div id="team-title">OUR TEAM</div>
            
            <div id="team-intro">
                We are a team of developers and recent graduates from NIT Calicut. With a fresh perspective and a drive for innovation, we deliver trending and top-notch software solutions.   
            </div>
            
            <div id="team-display">
                <div className="member">
                    <div className="member-image" style={{backgroundImage: 'url(./assets/sanju.jpg)'}} />
                    <div className="member-name">Sanjay Kumar</div>
                    <div className="member-role">Founder</div>
                    <div className="member-socials">
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/github.svg" style={{width: '80%'}}></img>
                        </a>
                        <a href="https://www.linkedin.com/in/swagath-n-s-213304189/" className="socials-icon-container">
                            <img src="./assets/linkedin.svg" style={{width: '60%'}}></img>
                        </a>
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/twitter.svg" style={{width: '60%'}}></img>
                        </a>
                    </div>
                </div>
                <div className="member">
                    <div className="member-image" style={{backgroundImage: 'url(./assets/abe.jpg)'}} />
                    <div className="member-name">Abhay R</div>
                    <div className="member-role">Founding Member</div>
                    <div className="member-socials">
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/github.svg" style={{width: '80%'}}></img>
                        </a>
                        <a href="https://www.linkedin.com/in/swagath-n-s-213304189/" className="socials-icon-container">
                            <img src="./assets/linkedin.svg" style={{width: '60%'}}></img>
                        </a>
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/twitter.svg" style={{width: '60%'}}></img>
                        </a>
                    </div>
                </div>
                <div className="member">
                    <div className="member-image" style={{backgroundImage: 'url(./assets/swak.jpg)'}} />
                    <div className="member-name">Swagath N S</div>
                    <div className="member-role">Web Developer</div>
                    <div className="member-socials">
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/github.svg" style={{width: '80%'}}></img>
                        </a>                        
                        <a href="https://www.linkedin.com/in/swagath-n-s-213304189/" className="socials-icon-container">
                            <img src="./assets/linkedin.svg" style={{width: '60%'}}></img>
                        </a>
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/twitter.svg" style={{width: '60%'}}></img>
                        </a>
                    </div>
                </div>
                <div className="member">
                    <div className="member-image" style={{backgroundImage: 'url(./assets/irman.jpg)'}} />
                    <div className="member-name">Imran Sajawal</div>
                    <div className="member-role">Android/IOS Developer</div>
                    <div className="member-socials">
                        <a href="https://github.com/IMRAN-SAJAWAL-1234" className="socials-icon-container">
                            <img src="./assets/github.svg" style={{width: '80%'}}></img>
                        </a>
                        <a href="https://www.linkedin.com/in/swagath-n-s-213304189/" className="socials-icon-container">
                            <img src="./assets/linkedin.svg" style={{width: '60%'}}></img>
                        </a>
                        <a href="https://github.com/swagath26" className="socials-icon-container">
                            <img src="./assets/twitter.svg" style={{width: '60%'}}></img>
                        </a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Team;