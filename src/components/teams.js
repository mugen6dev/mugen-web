import { motion } from "framer-motion";
import star from '../assets/Star.svg';

const Teams = () => {
    return (
        <section id='teamid' style={{width: "100vw", height: "100vh", background: '#E0E0E0', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', position: "relative"}}>
        
            <div className='stars'>
                <motion.img src={star} alt="" style={{width: 20, height: 24, left: '80vw', top: '15vw', position: 'absolute', transform: 'rotate(-104.54deg)', transformOrigin: '0 0'}}
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

            <div style={{paddingTop: "20vh", textAlign: 'center', color: '#1E1F1F', fontSize: 40, fontFamily: 'Cascadia Code', fontWeight: '700', letterSpacing: 6, wordWrap: 'break-word'}}>OUR TEAM</div>
{/*             
            <div style={{textAlign: 'center', color: '#1E1F1F', fontSize: 16, fontFamily: 'Cascadia Code', fontWeight: '300', letterSpacing: 2.40, wordWrap: 'break-word'}}>Lorem Ipsum is simply dummy text </div> */}
            
            <div style={{width: "75vw", textAlign: 'center', color: '#1E1F1F', fontSize: 16, fontFamily: 'Cascadia Code', fontWeight: '300', letterSpacing: 2.40, wordWrap: 'break-word'}}>
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. */}
                We are a team of developers and recent graduates from NIT Calicut, specializing in modern web and mobile app development, and cutting-edge UI design. With a fresh perspective and a drive for innovation, we deliver trending and top-notch software solutions.   
            </div>
            
            <div style={{paddingBottom: "8vh", alignSelf: 'stretch', paddingLeft: "13vw", paddingRight: "13vw", justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: "14.5vw", height: "14.5vw", background: '#424242', borderRadius: "50%"}} />
                <div style={{width: "14.5vw", height: "14.5vw", background: '#424242', borderRadius: "50%"}} />
                <div style={{width: "14.5vw", height: "14.5vw", background: '#424242', borderRadius: "50%"}} />
                <div style={{width: "14.5vw", height: "14.5vw", background: '#424242', borderRadius: "50%"}} />
            </div>
            
        </section>
    )
}

export default Teams;