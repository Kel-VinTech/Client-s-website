import "../Career/Career.scss"
// import {motion} from "framer-motion";
import {Link} from "react-router-dom"

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
                            <span>
                                <Link to="">View Opening</Link>
                            </span>
                        </div>
                    </div>

                </section>
           </section>
        </main>
    )
}

export default Career;