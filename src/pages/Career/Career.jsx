import "../Career/Career.scss"
import {motion} from "framer-motion";
import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"
// import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Career = () =>{



    return(
        <main>
           <section className="career-main">
            <section className="career-section">
                <div className="career-banner row">
                    <div className="career-content">
                        <h2>PCA Careers</h2>
                        <p>The latest career openings across the PCA client base. We deliver talent for your business.</p>
                        <h3>Subscribe to our latest job alerts</h3>

                        <div className="career-banner-button">
                            <span>
                            <input type="email" placeholder="Enter your email" required />
                            <Link to="#">Subscribe</Link>
                            </span>
                        </div>
                    </div>
                </div>

                </section>

                <section className="career-section-2">
                    <div className="career-content-2">
                        <div className="content">
                            <span>
                                <h2>Apprentice Butcher</h2>
                                <p>Lake District Farmers</p>
                            </span>
                            <span className="link"> 
                                <motion.div 
                                to=""
                                whileHover="hover"
                                initial="initial"     
                                >
                                    <Link to="#">
                                        
                                    Hello
                                
                                    <motion.div >
                                         <BsArrowRight/>
                                    </motion.div>
                                    </Link>
                                     
                                </motion.div>
                                   
                                     
                               
                            </span>
                        </div>
                    </div>

                </section>
           </section>
        </main>
    )
}

export default Career;