import "../Contact/Contact.scss"
import {motion} from "framer-motion";
import {BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter} from "react-icons/bi"
import {IoMailOpenOutline} from "react-icons/io5"
import {SlScreenSmartphone} from "react-icons/sl"
import {PiMapPinLight} from "react-icons/pi"
import { Link } from "react-router-dom";

const ContactUs = () => {
    // animations for the home-banner text
    
    const container = {
        hidden: { x:"5vw", opacity: 0 },
           
        show: {  
            x:"0vw",
          opacity: 1,
          transition: {
            delay: 2,
            type:'easeIn',
            duration:1.5,
          }
        },
        show2: {
            x:"0vw",
          opacity: 1,
          transition: {
            delay: 2,
            type:'easeIn',
            duration:1.75,
          }
      },
      show3: {
        x:"0vw",
      opacity: 1,
      transition: {
        delay: 2,
        type:'easeIn',
        duration:2,
      }
  },
      
    }
    return (
        <main>
            <section className="contact-banner">
                <div className="contact-content row">
                    <div className="contact-text">
                        <motion.div className="main-text row" 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        >
                            <h2>Contact us</h2>
                        </motion.div>

                        <motion.div className="contact-paragraph row"
                            variants={container}
                            initial="hidden"
                            animate="show2"
                        >
                            <p>
                            We believe a fresh perspective, hard-won experience and the input of an expert can make 
                            a big difference to business performance. Contact us today to learn more about how we can help your business succeed.</p>

                        </motion.div>
                    </div>
                    
                </div>
                
            </section>

            <div className="contact-box">
                        <div className="box-content row">



                            <div className="box1 box">
                                <h2>Make An Enquiry</h2>
                            </div>


                            <div className="box2 box">
                                <h2>Our Contact Details</h2>
                                

                                <div className="box-2-details">
                                
                                <span>
                                    <PiMapPinLight/>
                                <p>
                                The Studio
                                <p>44 Southport Drive</p>
                                    <p>Walney Island</p>
                                    <p>Barrow-In-Furness</p>
                                    <p>England</p>
                                    <p>LA14 3LT</p>
                                    
                                </p>         
                                </span>
                                    
                                    <span>
                                        <SlScreenSmartphone/>
                                        <h3>07494 748165</h3>
                                    </span>
                                    <span>
                                        <IoMailOpenOutline/>
                                        <h3>hello@philcollierassociates.com</h3>
                                    </span>
                                </div>
                                {/* social links */}
                                <div className="contact-social-media">
                                    <span><Link to="#"><BiLogoFacebook/></Link></span>
                                    <span><Link to="facebook.com"><BiLogoTwitter/></Link></span>
                                    <span><Link to="facebook.com"><BiLogoLinkedin/></Link></span>
                        
                                </div>
                            </div>

                            
                        </div>
            </div>

           

            

                    <section className="contact-service">
                        <div className="contact-service-content">
                            <div className="contact-service-text row">
                                <motion.h2
                                variants={container}
                                initial="hidden"
                                animate="show"
                                >Delivering helpful HR advice. Straight to your inbox.</motion.h2>
                                <motion.p
                                variants={container}
                                initial="hidden"
                                animate="show2"
                                >Get the latest news & tips that matter most to your business in the PCA monthly newsletter.</motion.p>
                            </div>
                        </div>

                </section>
        </main>
    )
}


export default ContactUs;