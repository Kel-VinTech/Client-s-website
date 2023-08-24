import "../Contact/Contact.scss"
import {motion} from "framer-motion";
import {BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter} from "react-icons/bi"
import {IoMailOpenOutline} from "react-icons/io5"
import {LuPhoneCall} from "react-icons/lu"

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
                                    {/* <span>
                                        <div>
                                           
                                            
                                        </div>
                                        <span>
                                            
                                            
                                        </span>
                                    </span> */}

                                    <div>
                                        <a href="">a</a>
                                        <p>The Studio
                                            <span>
                                            <p>44 Southport Drive</p>
                                            <p>44 Southport Drive</p>
                                            </span>
                                        </p>
                                        <div className="div">
                                        
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <LuPhoneCall/>
                                        <p>07494 748165</p>
                                    </div>
                                    <div>
                                        <IoMailOpenOutline/>
                                        <p>hello@philcollierassociates.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="contact-service row">
                        <div className="contact-service-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi voluptatibus cum! Iure facilis possimus laborum iste repellat, tenetur quod?</p>
                        </div>

                    </section>
        </main>
    )
}


export default ContactUs;