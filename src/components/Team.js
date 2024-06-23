import { motion } from "framer-motion";
import star from '../assets/Star.svg';
import './Team.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import sanjuPic from '../assets/sanju.jpg';
import abePic from '../assets/abe.jpg';
import swakPic from '../assets/swak.jpg';
import irmanPic from '../assets/irman.jpg';

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

const Member = ({image, name, role1, role2, githubLink, linkedinLink, twitterLink}) => {
    return (
        <div className="member">
            <div className="member-image" style={{backgroundImage: `url(${image})`}} />
            <div className="member-name">{name}</div>
            <div className="member-role">{role1}<br/>{role2}</div>
            <div className="member-socials">
                <a href={githubLink} className="socials-icon-container">
                    <img src={githubIcon} style={{width: '80%'}}></img>
                </a>
                <a href={linkedinLink} className="socials-icon-container">
                    <img src={linkedinIcon} style={{width: '60%'}}></img>
                </a>
                <a href={twitterLink} className="socials-icon-container">
                    <img src={twitterIcon} style={{width: '60%'}}></img>
                </a>
            </div>
        </div>
    )
}

const Team = () => {
    return (
        <section id='team-section'>
        
            <StarBackground/>

            <div id="team-title">OUR TEAM</div>
            
            <div id="team-intro">
                We are a team of developers and recent graduates from NIT Calicut. With a fresh 
                perspective and a drive for innovation, we deliver trending and top-notch software solutions.   
            </div>
            
            <div id="team-display">

                <Member
                    image={sanjuPic}
                    name="Sanjay Kumar" role1="Founder" role2="Project Lead"
                    githubLink="https://github.com/DE3V"
                    linkedinLink="https://www.linkedin.com/in/sanjay-kumar-017415117/"
                    twitterLink="https://twitter.com/"
                />

                <Member
                    image={abePic}
                    name="Abhay R" role1="Founding Member" role2="UI/UX Lead"
                    githubLink="https://github.com/babyblue64"
                    linkedinLink="https://www.linkedin.com/in/abhay-r-76153b166/"
                    twitterLink="https://twitter.com/"
                />

                <Member
                    image={swakPic}
                    name="Swagath N S" role1="Founding Member" role2="Web-Development Lead"
                    githubLink="https://github.com/swagath26"
                    linkedinLink="https://www.linkedin.com/in/swagath-n-s-213304189/"
                    twitterLink="https://twitter.com/"
                />

                <Member
                    image={irmanPic}
                    name="Imran Sajawal" role1="Founding Member" role2="Android/iOS Lead"
                    githubLink="https://github.com/IMRAN-SAJAWAL-1234"
                    linkedinLink="https://www.linkedin.com/in/imran-sajawal-585238212/"
                    twitterLink="https://twitter.com/"
                />
                
            </div>
            
        </section>
    )
}

export default Team;