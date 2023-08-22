import "./footer.scss"
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter} from "react-icons/bi"
import {IoMailOpenOutline} from "react-icons/io5"
import {LuPhoneCall} from "react-icons/lu"

const Footer = () => {
    return (
        <section className="">
             <div className="footer">
                <div className="footer-content-1 row">
                <div className="footer-1">
                            <h1>Logo</h1>
                            <span><LuPhoneCall/>07494 748165</span>
                            <span><IoMailOpenOutline/>hello@philcollierassociates.com</span>                                                                                                                                                                                                                                                                                                                                                                                                                                          
                </div>

                    <div className="footer-2">
                        <h2>Explore PCA</h2>
                        <Link>AboutUs</Link>
                        <Link>Services</Link>
                        <Link>Contact Us</Link>
                        <Link>Careers</Link>
                        <Link>Blog</Link>

                    </div>
                    <div className="footer-3">
                        <h2>Make an Enquiry</h2>
                            <Link to="#">Request a call back<HiOutlineArrowNarrowRight/></Link>
                    </div>
                    <div className="footer-4">
                            <h2>Our Location</h2>
                        <p>Our Location</p>
                        <p>44 Southport Drive</p>
                        <p>Walney Island</p>
                        <p>Barrow-In-Furness</p>
                        <p>England</p>
                        <p>LA14 3LT</p>
                    </div>
                </div>

                <div className="footer-content-2 row">
                    <div className="footer-information">
                        <h3>© 2023 Phil Collier Associates Ltd. Company number 09119019</h3>
                        <p>Designed and made by Lawrence&Co</p>
                    </div>
                    <div className="footer-social-media">
                        <span><Link to="facebook.com"><BiLogoFacebook/></Link></span>
                        <span><Link to="facebook.com"><BiLogoTwitter/></Link></span>
                        <span><Link to="facebook.com"><BiLogoLinkedin/></Link></span>
                        
                    </div>
                </div>


                <div className="footer-content-3 row">
                    <Link to="#">Privacy Policy</Link>
                </div>
             
             </div>
        </section>
    )
}


export default Footer;